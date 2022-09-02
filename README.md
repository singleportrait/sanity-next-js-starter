# Starter Website: Sanity Studio + Next.js

Both apps are set up to be hosted on Vercel and be managed there. It's intended to be two Vercel apps that then communicate with each other.

### Installation

- Clone the repo and move into the root repo folder
- Set up a new Sanity project via the command line, using the Sanity CLI (which needs to be installed beforehand)
  ```sh
    sanity login
    cd studio/ # Move into the Sanity studio folder
    sanity init
    # It will ask if you want to reconfigure it. Say 'Yes'
    ? The current folder contains a configured Sanity studio. Would you like to reconfigure it? (Y/n)
    # Select 'Create new project'
    # Give it a project name
    # Use the default dataset configuration `production`
    # It will do some things...
    # And then it should be done! It should have updated `studio/sanity.json` with your new project ID
  ```
- Rename `studio/.env.development.test` to `studio/.env.development` and update Sanity production URL and preview secret
- Rename `web/.env.local.test` to `web/.env.local` and update the project name, the newly-generated Sanity project ID, and preview secret
- Install Lerna globally, and then bootstrap the project, which will install all packages. From the root repo folder:
  ```sh
    npm install --global lerna
    lerna boostrap
  ```
  - This app is a monorepo that uses Lerna to install all packages in the main and sub-folders at once.
- *Housekeeping:* Update the project names in `studio/package.json` and `web/package.json`
- Now, you should be ready to go, and start the app using the command below!
- To enable content previews, you'll need to set up a CORS origin host and an API key in the Sanity management admin. See instructions below.

### Developing

Using Lerna, both apps in the monorepo can be started from the root folder:

```
yarn run dev
```

To run each independently, you can run:

```
# Sanity
cd studio/
sanity start

# Next
cd web/
yarn run dev
```

### Environment variables

You need some environment variables in `studio/.env.development` and in Vercel for Sanity's build:

```
SANITY_STUDIO_PRODUCTION_URL
SANITY_STUDIO_DEVELOPMENT_URL
SANITY_STUDIO_PREVIEW_SECRET // This can be whatever string you like, it's simply shared with the front-end server
```

And, a few environment variables are needed in `web/.env.local` (and also Vercel, or wherever it's hosted) for Next's build:

```
NEXT_PUBLIC_PROJECT_NAME
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
NEXT_PUBLIC_GA_TRACKING_ID
SANITY_API_TOKEN // You'll need to create this at sanity.io/manage to enable web previews
SANITY_PREVIEW_SECRET // Same secret as above in Sanity's configuration
```

### Enabling previews

You'll need to do two things at https://sanity.io/manage in order to show previews on the Next.js front-end:
- Generate an API token with 'Read' permissions, and add it to `.env.local` as the `SANITY_API_TOKEN`
- Add a CORS Origin host with 'Allow Credentials' set, for whatever port `localhost` is running the Next.js server, usually `http://localhost:3000`


### Vercel setup

- To run each app separately, you will create 2 projects in Vercel; one for `studio/` and one for `web/`
- This could easily be Netlify or any other hosting service. 
- The Sanity admin has a plugin installed, `sanity-plugin-vercel-deploy`, and a config file `studio/vercel.json`, that can be swapped for another host's tools.

**Vercel instructions:**
- First, go to https://vercel.com/new
- Import your repo (you may have to enable Github permissions to access the repo)
- For studio:
  - Select 'Sanity' as the framework preset
  - Select `studio/` as the root folder
  - Check that `public` is the output directory
  - Add your Sanity environment variables from `.env.development`
  - Once this is deployed, you'll need to add this Vercel URL to the accepted CORS origins at https://www.sanity.io/manage (with credentials allowed) in order to use the studio on this new URL
  - For any preview and branch URLs, you'll need to do the same
- For web:
  - Select 'Next.js' as the framework
  - Select `web/` as the root folder
  - Add the environment variables from `.env.local`
- Finally, in the Sanity admin, you will create a new project in the 'Deploy' tab to allow the admin to deploy the front-end using a build hook
  - Create a new Git build hook in your Vercel project for the `web/` directory
  - Create a new token for your Vercel account [here](https://vercel.com/account/tokens) (with no expiration)
  - Follow the steps [here](https://www.sanity.io/plugins/vercel-deploy) to set up the new project in the Sanity admin, using the tokens you generated above
