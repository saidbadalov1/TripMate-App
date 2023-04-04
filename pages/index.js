import withAuth from '@/helpers/withAuth';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/trips');
  }, []);
  return (
    <>
      <Head>
        <title>Tripy!</title>
      </Head>
    </>
  );
}

export default withAuth(Home);
