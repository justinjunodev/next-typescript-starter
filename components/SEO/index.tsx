import Head from 'next/head'
import { metaFields } from 'lib'

interface SEOProps {
  pageName?: string
  pageDesc?: string
  pageImage?: string
}

export const SEO = ({ pageName, pageDesc, pageImage }: SEOProps) => {
  const { siteTitle, siteDesc, siteDomain, siteUrl, siteImage, siteFavicon } =
    metaFields

  const title = pageName ? `${pageName} | ${siteTitle}` : siteTitle
  const description = pageDesc || siteDesc
  const image = pageImage || siteImage

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={siteFavicon} />

      <meta property="og:url" content={siteUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={siteDomain} />
      <meta property="twitter:url" content={siteUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Head>
  )
}
