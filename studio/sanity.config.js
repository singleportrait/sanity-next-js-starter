import {defineConfig} from 'sanity';
import {structureTool} from 'sanity/structure';
import deskStructure from './deskStructure';
import schemaTypes from './schemas/schema';
import {visionTool} from '@sanity/vision';
// Add this in when you're ready to deploy to Vercel
// import {vercelDeployTool} from 'sanity-plugin-vercel-deploy';

export default defineConfig({
  name: 'default',
  title: 'Sanity Next JS Starter',
  projectId: '5n4ej9mc',
  dataset: 'production',
  plugins: [
    structureTool({
      structure: deskStructure,
    }),
    // vercelDeployTool(),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
