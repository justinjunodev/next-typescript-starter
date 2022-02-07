import type { NextPage } from 'next';
import Layout from 'components/Layout';
import Link from 'components/Link';
import SEO from 'components/SEO';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO pageName="Home" />
      <h1>Next + TypeScript Starter</h1>
      <p>
        Featuring Styled-Components, ESLint, Prettier, Axe a11y monitoring,
        Fathom analytics, sitemap generation, and more!
      </p>
      <Link
        href="https://github.com/justinjunodev/next-typescript-starter"
        isExternal
      >
        View on GitHub
      </Link>
    </Layout>
  );
};

export default Home;
