import { useState } from 'react';

import Divider from './Divider';
import Button from './Button';

const MailchimpSignup = ({
  title = 'Subscribe for updates',
  text,
  buttonText = 'Subscribe',
  contactEmail = 'khalila@chann3l.world',
}) => {
  const [status, setStatus] = useState('');

  const genericErrorMessage = `Sorry, there was an issue signing you up. Contact ${contactEmail} to sign up.`;

  const submit = async (e) => {
    e.preventDefault();
    setStatus('');

    const email = e.target.elements.email.value;
    if (email && email.indexOf('@') > -1) {
      try {
        setStatus('Subscribing...');

        fetch('/api/mailchimp-subscribe', {
          method: 'POST',
          body: JSON.stringify({ email, contactEmail }),
        })
          .then((response) => response.json())
          .then((data) => {
            if (data.error) {
              return setStatus(data.error);
            }
            if (data.status) {
              return setStatus(data.status);
            }
            return setStatus(genericErrorMessage);
          });
      } catch (err) {
        console.log('Error', err);
        setStatus(genericErrorMessage);
      }
      return;
    }
    setStatus('That doesn\'t look like an email address!');
  };

  return (
    <div className="flex flex-col sm:items-center sm:text-center w-full max-w-xs my-4">
      <Divider />
      <h2 className="mb-6">
        {title}
      </h2>
      {text && (
        <p className="mb-8">
          {text}
        </p>
      )}
      <form className="w-full" onSubmit={(e) => submit(e)}>
        <input
          type="text"
          name="email"
          placeholder="Your email"
          className="w-full bg-primary-saturated-transparent placeholder:text-white-transparent font-light block mb-4 px-2 py-1 border border-white rounded-sm outline-none focus:ring-none focus:outline-white/30 focus:outline-offset-2 transition-all"
        />
        <Button
          type="submit"
          message={buttonText}
        />
        <div className="text-emerald-300 mt-4">
          {status}
        </div>
      </form>
    </div>
  );
};

export default MailchimpSignup;
