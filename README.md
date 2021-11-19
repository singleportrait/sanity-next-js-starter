# CHANN3L Website: Sanity Studio + Next.js

Both apps are hosted on Vercel and can be managed there.

Using Lerna, both apps in the monorepo can be started from the root folder:

```
yarn run dev
```

To run each independently, you can do:

```
# Sanity
cd studio/
sanity start

# Next
cd web/
yarn run dev
```

### Environment variables

You need some environment variables in `/web/.env.local` and Vercel for Next's compilation:

```
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_GA_TRACKING_ID
SANITY_API_TOKEN
SANITY_PREVIEW_SECRET
MAILCHIMP_API_KEY
```

And, a few environment variables are needed in `/studio/.env.development` (and Vercel, or wherever it's hosted) for Sanity's build:

```
SANITY_STUDIO_PRODUCTION_URL
SANITY_STUDIO_DEVELOPMENT_URL
SANITY_STUDIO_PREVIEW_SECRET // Same secret as above in Next's configuration
```

### Mailchimp Signup

The Mailchimp API key and `listId` referenced in `/web/pages/api/mailchimp-subscribe.js` can be found in Khalila's CHANN3L Mailchimp account.
