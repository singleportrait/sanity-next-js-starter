const mailchimp = require('@mailchimp/mailchimp_marketing');

const listId = '6e4ddfd3b3';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us2',
});

const addOrUpdateMember = async (email, contactEmail, res, existingMemberStatus) => {
  const genericStatus = `Sorry, we got an odd response. Contact ${contactEmail} to sign up.`;

  try {
    const response = await mailchimp.lists.setListMember(listId, email, {
      email_address: email,
      status_if_new: 'subscribed',
      status: existingMemberStatus,
    });
    // console.log('Response', response);
    let status;
    switch (response.status) {
      case 'pending':
        status = 'Success! To complete your signup, click the link in the confirmation email we sent you.';
        break;
      case 'subscribed':
        status = 'Great, you\'re all signed up!';
        break;
      case 'archived':
        status = `It looks like your email has been archived. Contact ${contactEmail} to sign up.`;
        break;
      case 'unsubscribed':
        status = `It looks like you have unsubscribed in the past. Contact ${contactEmail} to sign up.`;
        break;
      default:
        status = genericStatus;
    }
    // console.log('Status', status);
    res.json({ status });
  } catch (e) {
    console.log('Got an invalid Mailchimp response', e.response.body);
    res.status(400).json({
      error: e?.response?.body?.detail || genericStatus,
    });
  }
};

export default async function subscribe(req, res) {
  if (req.method === 'POST') {
    const { email, contactEmail } = JSON.parse(req.body);

    try {
      const member = await mailchimp.lists.getListMember(listId, email);

      // If they've previously unsubscribed or been archived, this `status: 'pending'` will
      // re-send them a confirmation email, which is required for resubscribing
      const existingMemberStatus = (member && member?.status === 'subscribed') ? 'subscribed' : 'pending';

      await addOrUpdateMember(email, contactEmail, res, existingMemberStatus);
    } catch (e) {
      console.log('Got an invalid Mailchimp response', e.response.body);

      // Mailchimp returns a 404 if the user doesn't exist
      if (e?.status === 404) {
        await addOrUpdateMember(email, contactEmail, res);
      } else {
        res.status(400).json({
          error: e?.response?.body?.detail || `Sorry, we got an error. Contact ${contactEmail} to sign up.`,
        });
      }
    }
  }
}
