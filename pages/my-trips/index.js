import TripsCard from '@/components/trips/TripsCard/TripsCard';
import TripsGrid from '@/components/trips/TripsGrid/TripsGrid';
import { GradientButton } from '@/components/UI/Buttons/Buttons';
import withAuth from '@/helpers/withAuth';
import { deleteTripById, getTripsByUser } from '@/services/trips';
import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const MyTrips = () => {
  const [data, setData] = useState([]);
  const userId = useSelector((state) => state.auth.userId);

  useEffect(() => {
    const loadData = async () => {
      const trips = await getTripsByUser(userId);
      setData(trips);
    };
    loadData();
  }, []);

  const handleDelete = (id) => {
    deleteTripById(id);
    setData(data.filter((trip) => trip.id !== id));
  };

  return (
    <>
      <Head>
        <title>My Trips</title>
      </Head>
      <div className='flex gap-2'>
        <Link href='/new-trip'>
          <GradientButton type='button'>Add New Trip</GradientButton>
        </Link>
        {/* <Link href='/my-trips/add-car'>
          <GradientButton type='button'>Add New Car</GradientButton>
        </Link> */}
      </div>

      <TripsGrid>
        {data?.map((trip) => (
          <TripsCard key={trip.id} trips={trip} delete={handleDelete} />
        ))}
      </TripsGrid>
    </>
  );
};

export default withAuth(MyTrips);
