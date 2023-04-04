import { GradientButton } from '@/components/UI/Buttons/Buttons';
import { signin } from '@/services/auth';
import { getUserId, login } from '@/store/features/authSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const request = await signin(data);
    if (!request.error) {
      router.push('/my-trips');
      dispatch(login());
      dispatch(getUserId(request?.localId));
    } else {
      alert(request.error.message);
    }
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      {!isAuth && (
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type='email'
              {...register('email')}
              placeholder='Email address'
            />
            <input
              type='password'
              {...register('password')}
              placeholder='Password'
            />
            <GradientButton type='submit' className='btn_info'>
              Login
            </GradientButton>
          </form>
        </div>
      )}
    </>
  );
};

export default Login;
