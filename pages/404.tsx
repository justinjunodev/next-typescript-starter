import type { NextPage } from 'next';
import Link from 'next/link';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const PageNotFound: NextPage = () => {
  return (
    <Layout>
      <SEO pageName="Page Not Found" />
      <h1>Next + TypeScript Starter</h1>
      <p>
        Page not found. <Link href="/">Return home?</Link>
      </p>
    </Layout>
  );
};

export default PageNotFound;
