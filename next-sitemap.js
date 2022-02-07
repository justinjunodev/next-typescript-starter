import metaFields from 'lib/meta-fields';

const excludedPages = ['/404'];

module.exports = {
  siteUrl: metaFields.siteUrl,
  exclude: [...excludedPages],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [...excludedPages],
      },
    ],
  },
};
