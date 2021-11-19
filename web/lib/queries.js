const metadataQuery = `
  "seoDescription": seo.description,
  "seoImage": seo.openGraphImage,
  "siteSettings": *[_type == "settings"][0]{
    logoColor,
    email,
    "seoDescription": seo.description,
    "seoImage": seo.openGraphImage,
  }
`;

export const readingsQuery = `*[_type == "readings"][0]{
  ...,
  ${metadataQuery},
}`;

export const artistsQuery = `*[_type == "artists"][0]{
  ...,
  artists[]{
    ...,
    image{
      ...,
      "bgColor": asset->metadata.palette.darkVibrant.background,
    },
  },
  ${metadataQuery},
}`;

export const writingsQuery = `*[_type == "writings"][0]{
  ...,
  ${metadataQuery},
}`;

export const indexQuery = `*[_type == "settings"][0]{
  name,
  email,
  logoColor,
  "seoDescription": seo.description,
  "seoImage": seo.openGraphImage,
}`;
