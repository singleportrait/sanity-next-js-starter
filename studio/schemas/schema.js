// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import readings from './documents/readings';
import artists from './documents/artists';
import writings from './documents/writings';
import settings from './documents/settings';

import blockContent from './objects/blockContent';
import asset from './objects/asset';
import button from './objects/button';
import callToAction from './objects/callToAction';
import seo from './objects/seo';

import philosophy from './objects/philosophy';
import offering from './objects/offering';
import newsletterSignup from './objects/newsletterSignup';
import artist from './objects/artist';
import streamingOption from './objects/streamingOption';
import article from './objects/article';
import simpleArticle from './objects/simpleArticle';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    readings,
    artists,
    writings,
    settings,

    blockContent,
    asset,
    button,
    callToAction,
    seo,

    philosophy,
    offering,
    newsletterSignup,
    artist,
    streamingOption,
    article,
    simpleArticle,
  ]),
})
