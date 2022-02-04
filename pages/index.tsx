import type { NextPage } from 'next';
import Layout from 'components/Layout';
import SEO from 'components/SEO';

const Home: NextPage = () => {
  return (
    <Layout>
      <SEO pageName="Home" />
      <h1>Next + TypeScript Starter</h1>
    </Layout>
  );
};

export default Home;
