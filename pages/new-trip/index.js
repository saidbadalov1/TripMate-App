import NewTripForm from '@/components/trips/NewTripForm/NewTripForm';
import withAuth from '@/helpers/withAuth';
import Head from 'next/head';
import React from 'react';

const NewTrip = () => {
  return (
    <>
      <Head>
        <title>Create new trip</title>
      </Head>
      <div>
        <NewTripForm />
      </div>
    </>
  );
};

export default withAuth(NewTrip);
