import { GradientButton } from '@/components/UI/Buttons/Buttons';
import { signUp } from '@/services/auth';
import { getUserId, login } from '@/store/features/authSlice';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

const Register = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const request = await signUp(data);
    if (!request.error) {
      router.push('/trips');
      dispatch(login());
      dispatch(getUserId(request?.localId));
    } else {
      alert(request?.error?.message);
    }
  };

  return (
    <>
      <Head>
        <title>Register</title>
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
              Register
            </GradientButton>
          </form>
        </div>
      )}
    </>
  );
};

export default Register;
