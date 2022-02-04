import type { NextPage } from 'next';
import Link from 'next/link';
import SEO from 'components/SEO';

const PageNotFound: NextPage = () => {
  return (
    <div>
      <SEO pageName="Page Not Found" />

      <h1>Next + TypeScript Starter</h1>
      <p>
        Page not found. <Link href="/">Return home?</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
