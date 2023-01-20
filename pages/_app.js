import {QueryClientProvider, QueryClient} from 'react-query';
import Layout from '../components/layout/Layout';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css';

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
      <Layout>
        <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
        </QueryClientProvider>
      </Layout>
  )
}
