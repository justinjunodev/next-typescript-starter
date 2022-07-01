import type { AppProps } from 'next/app';
import { GlobalStyles, theme } from 'styles';
import { ThemeProvider } from 'styled-components';
import { useAnalytics, useAxe } from 'hooks';

const App = ({ Component, pageProps }: AppProps) => {
  useAxe();
  useAnalytics();

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
