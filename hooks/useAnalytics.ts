import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as Fathom from 'fathom-client';
import metaFields from 'lib/metaFields';

const useAnalytics = () => {
  const router = useRouter();
  const { siteDomain, siteUrl } = metaFields;
  const formattedSiteUrl = siteUrl.replace(/^https?:\/\//, '');

  useEffect(() => {
    if (
      process.env.NODE_ENV === 'production' &&
      process.env.NEXT_PUBLIC_FATHOM_SITE_ID
    ) {
      Fathom.load(process.env.NEXT_PUBLIC_FATHOM_SITE_ID, {
        includedDomains: [siteDomain, formattedSiteUrl],
      });
    }

    function onRouteChangeComplete() {
      Fathom.trackPageview();
    }

    router.events.on('routeChangeComplete', onRouteChangeComplete);

    return () => {
      router.events.off('routeChangeComplete', onRouteChangeComplete);
    };
  }, [router.events, siteDomain, formattedSiteUrl]);
};

export default useAnalytics;
