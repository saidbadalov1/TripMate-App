import { logout } from '@/store/features/authSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const NavbarWebNavigation = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div className='hidden md:flex items-center'>
      <Link href='/trips'>
        <button className='text-white font-bold hover:text-gray-200 ml-6'>
          Trips
        </button>
      </Link>
      {isAuth && (
        <Link href='/my-trips'>
          <button className='text-white font-bold hover:text-gray-200 ml-6'>
            My Trips
          </button>
        </Link>
      )}
      {!isAuth && (
        <>
          <Link href='/auth'>
            <button className='text-white font-bold hover:text-gray-200 ml-6'>
              Login
            </button>
          </Link>
          <Link href='/auth/register'>
            <button className='text-white font-bold hover:text-gray-200 ml-6'>
              Register
            </button>
          </Link>
        </>
      )}

      {isAuth && (
        <button
          onClick={logoutHandler}
          className='text-white bg-red-400 px-3 py-2 rounded  font-bold hover:text-gray-200 ml-6'
        >
          Logout
        </button>
      )}
    </div>
  );
};

export default NavbarWebNavigation;
