import { FuelProvider } from '@fuels/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Analytics } from '@vercel/analytics/react';
import type { AppProps } from 'next/app';
import '../styles/docsearch.css';
import '../styles/index.css';

import { Provider } from '../components/Provider';
import { VersionProvider } from '../hooks/useVersion';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FuelProvider>
      <QueryClientProvider client={queryClient}>
        <VersionProvider>
          <Provider>
            <style jsx global>{`
                :root {
                  --fonts-sans: system-ui, 'Inter', sans-serif;
                  --fonts-display: system-ui, 'Inter', sans-serif;
                  --fonts-mono: 'Inconsolata';
                }
              `}</style>
            <Component {...pageProps} />
            <Analytics />
          </Provider>
        </VersionProvider>
      </QueryClientProvider>
    </FuelProvider>
  );
}
