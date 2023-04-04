import SearchTrip from '@/components/trips/SearchTrip/SearchTrip';
import TripsCard from '@/components/trips/TripsCard/TripsCard';
import TripsGrid from '@/components/trips/TripsGrid/TripsGrid';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getAllTrips } from '../../services/trips';

const Trips = ({ trips }) => {
  const [tripsList, setTripsList] = useState(trips);
  const cityValue = useSelector((state) => state.city.city);
  const city = cityValue?.toLowerCase();

  useEffect(() => {
    setTripsList(
      trips.filter(
        (trip) =>
          trip.from?.toLowerCase().includes(city) ||
          trip.to?.toLowerCase().includes(city),
      ),
    );
  }, [city]);

  return (
    <>
      <Head>
        <title>Tripy - All Trips</title>
      </Head>
      <div>
        <SearchTrip />
        <TripsGrid>
          {tripsList?.map((trip) => (
            <TripsCard key={trip.id} trips={trip} />
          ))}
        </TripsGrid>
      </div>
    </>
  );
};

export default Trips;

export async function getStaticProps() {
  const data = await getAllTrips();
  return {
    props: {
      trips: data,
    },
  };
}
