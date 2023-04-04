import TripDetails from '@/components/trips/TripDetails/TripDetails';
import withAuth from '@/helpers/withAuth';
import { getTripById } from '@/services/trips';
import Head from 'next/head';
import React from 'react';

const MyTripDetailPage = ({ trip }) => {
  return (
    <>
      <Head>
        <title>
          Trip ({trip.from} - {trip.to})
        </title>
      </Head>
      <TripDetails trip={trip} />
    </>
  );
};

export default withAuth(MyTripDetailPage);

export async function getServerSideProps(context) {
  const id = `-${context.params.id}`;
  const data = await getTripById(id);
  return {
    props: { trip: data },
  };
}
