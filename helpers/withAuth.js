import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

const withAuth = (Component) => (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const isAuthLoading = useSelector((state) => state.auth.loading);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth && !isAuthLoading) {
      router.push('/auth');
    }
  }, [isAuth, router]);

  if (isAuthLoading) {
    return <></>;
  }

  if (isAuth) {
    return <Component {...props} />;
  } else {
    return <></>;
  }
};

export default withAuth;
