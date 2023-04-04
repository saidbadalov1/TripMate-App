import React from 'react';
import TripDetails from '@/components/trips/TripDetails/TripDetails';
import { getTripById } from '@/services/trips';
import Head from 'next/head';

const TripDetailsPage = ({ trip }) => {
  return (
    <>
      <Head>
        <title>
          Tripy - {trip.from} {trip.to}
        </title>
      </Head>
      <TripDetails trip={trip} />
    </>
  );
};

export default TripDetailsPage;

export async function getServerSideProps(context) {
  const id = `-${context.params.tripId}`;
  const data = await getTripById(id);
  return {
    props: { trip: data },
  };
}
