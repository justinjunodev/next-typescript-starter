import type { AppProps } from 'next/app';
import useAnalytics from 'hooks/useAnalytics';

const App = ({ Component, pageProps }: AppProps) => {
  useAnalytics();
  return <Component {...pageProps} />;
};

export default App;
