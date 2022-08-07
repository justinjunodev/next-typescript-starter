import { Html, Head, Main, NextScript } from 'next/document';

import { metaFields } from 'lib';

const Document = () => {
  return (
    <Html lang={metaFields.siteLang}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
