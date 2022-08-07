import type { AppProps } from 'next/app';
import { useAnalytics, useAxe } from 'hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useAxe();
  useAnalytics();

  return <Component {...pageProps} />;
};

export default App;
