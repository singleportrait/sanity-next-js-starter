import React from 'react';
import S from '@sanity/desk-tool/structure-builder';

export default () => {
  return S.list()
    .title('Pages')
    .items([
      S.listItem()
        .title('Readings')
        .child(
          S.document()
            .schemaType('readings')
            .documentId('readings')
        )
        .icon(() => <div style={{ fontSize: 22 }}>🔮</div>),
      S.listItem()
        .title('Artists')
        .child(
          S.document()
            .schemaType('artists')
            .documentId('artists')
        )
        .icon(() => <div style={{ fontSize: 22 }}>🎵</div>),
      S.listItem()
        .title('Writings')
        .child(
          S.document()
            .schemaType('writings')
            .documentId('writings')
        )
        .icon(() => <div style={{ fontSize: 22 }}>📝</div>),
      S.divider(),
      S.listItem()
        .title('Site Settings')
        .child(
          S.document()
            .schemaType('settings')
            .documentId('settings')
        )
        .icon(() => <div style={{ fontSize: 22 }}>🛠</div>),
      ...S.documentTypeListItems().filter((item) => {
        return ![
          'readings',
          'artists',
          'writings',
          'settings'
        ].includes(item.getId());
      }),
    ]);
};