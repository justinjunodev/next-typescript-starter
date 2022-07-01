import { Layout, Link, SEO } from 'components';

const NotFoundPage = () => {
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

export default NotFoundPage;
