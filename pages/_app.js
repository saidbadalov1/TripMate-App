import Layout from '@/components/layouts/Layout';
import { store } from '@/store/store';
import '@/styles/globals.css';
import { Provider } from 'react-redux';
import GetAuthStatus from '@/common/GetAuthStatus';

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GetAuthStatus />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
