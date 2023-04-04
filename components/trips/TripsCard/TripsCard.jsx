import DateIcon from '@/components/icons/date';
import { GradientButton, SimpleButton } from '@/components/UI/Buttons/Buttons';
import Link from 'next/link';
import { useRouter } from 'next/router';

const TripsCard = (props) => {
  const trips = props.trips;

  const router = useRouter();
  const isMyTripsPage = router.pathname.includes('/my-trips');
  const routeLink = `${router.pathname}/${trips?.id?.slice(1)}`;

  return (
    <>
      <div className='max-w-sm p-6  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 '>
        <h5 className='mb-2 text-2xl font-bold tracking-tight sm:text-start text-center text-gray-900 dark:text-white'>
          {trips.from} - {trips.to}
        </h5>
        <p className='mb-3 text-center flex gap-2 items-center font-normal text-gray-700 dark:text-gray-400'>
          <DateIcon /> {trips.go_date}
        </p>
        <div className=''>
          <Link href={routeLink}>
            <GradientButton className='flex items-center'>
              See more
              <svg
                aria-hidden='true'
                className='w-4 h-4 ml-2 -mr-1'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                  clipRule='evenodd'
                ></path>
              </svg>
            </GradientButton>
          </Link>
          {isMyTripsPage && (
            <div className='flex gap-1 mt-4'>
              <Link href={`${routeLink}/update`}>
                <SimpleButton className='flex items-center bg-orange-400 hover:bg-orange-500'>
                  Edit
                </SimpleButton>
              </Link>

              <SimpleButton
                onClick={() => props.delete(trips.id)}
                className='flex items-center  bg-red-500 hover:bg-red-600'
              >
                Delete
              </SimpleButton>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TripsCard;
