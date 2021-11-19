import { readingsQuery, artistsQuery, writingsQuery } from '../../lib/queries';
import { previewClient } from '../../lib/sanityServer';

export default async function preview(req, res) {
  if (
    req.query.secret !== process.env.SANITY_PREVIEW_SECRET
    || !req.query.document
  ) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  console.log('Request query info', req.query.document);

  const { document } = req.query;

  const isDraft = document.startsWith('drafts.');
  const id = isDraft ? document.slice(7) : document;

  if (id === 'readings') {
    // Check if the readings ID exists
    const readings = await previewClient.fetch(readingsQuery);

    if (!readings) {
      return res.status(401).json({ message: 'Could not find readings' });
    }

    res.setPreviewData({});

    res.writeHead(307, { Location: '/readings' });
  } else if (id === 'artists') {
    const artists = await previewClient.fetch(artistsQuery);

    if (!artists) {
      return res.status(401).json({ message: 'Could not find artists' });
    }

    res.setPreviewData({});

    res.writeHead(307, { Location: '/artists' });
  } else if (id === 'writings') {
    const writings = await previewClient.fetch(writingsQuery);

    if (!writings) {
      return res.status(401).json({ message: 'Could not find writings' });
    }

    res.setPreviewData({});

    res.writeHead(307, { Location: '/writings' });
  } else {
    // console.log('No match');
    res.status(401).json({ message: 'Could not find any of those previews' });
  }

  return res.end();
}
