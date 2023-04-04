import { logout } from '@/store/features/authSlice';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';

const NavbarMobileNavigation = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <div
      className={`${
        props.isOpen ? 'block' : 'hidden'
      } md:hidden fixed top-[60px] right-0 left-0 py-[20px] bg-gradient-to-r from-blue-500 to-purple-500`}
    >
      <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3  gap-4 flex flex-col'>
        <Link href='/trips'>
          <button className='text-white text-[18px] hover:text-gray-200 block px-3 py-2 rounded-md text-base font-bold'>
            Trips
          </button>
        </Link>
        {isAuth && (
          <Link href='/my-trips'>
            <button className='text-white text-[18px] hover:text-gray-200 block px-3 py-2 rounded-md text-base font-bold'>
              My Trips
            </button>
          </Link>
        )}
        {!isAuth && (
          <>
            {' '}
            <Link href='/auth'>
              <button className='text-white text-[18px] hover:text-gray-200 block px-3 py-2 rounded-md text-base font-bold'>
                Login
              </button>
            </Link>
            <Link href='/auth/register'>
              <button className='text-white text-[18px] hover:text-gray-200 block px-3 py-2 rounded-md text-base font-bold'>
                Register
              </button>
            </Link>
          </>
        )}

        {isAuth && (
          <button
            onClick={logoutHandler}
            className='text-white text-[18px] bg-red-400 hover:text-gray-200 block px-3 py-2 rounded-md text-base font-bold'
          >
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default NavbarMobileNavigation;
