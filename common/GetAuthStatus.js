import { login, logout, updateUserId } from '@/store/features/authSlice';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const GetAuthStatus = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = () => {
      const auth = JSON.parse(localStorage.getItem('auth'));
      const userID = localStorage.getItem('userId');
      if (auth && userID !== 'undefined') {
        dispatch(login());
        dispatch(updateUserId());
      } else {
        dispatch(logout());
      }
    };

    checkAuth();
  }, []);

  return <></>;
};

export default GetAuthStatus;
