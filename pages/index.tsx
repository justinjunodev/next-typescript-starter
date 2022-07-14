import { Layout, Link, SEO } from 'components';

const HomePage = () => {
  return (
    <Layout>
      <SEO pageName="Home" />
      <h1>Next + TypeScript Starter</h1>
      <p>
        Featuring Styled-Components, Playwright, ESLint, Prettier, Axe a11y
        monitoring, Fathom analytics, sitemap generation, and more!
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

export default HomePage;
