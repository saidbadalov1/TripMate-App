import { GradientButton } from '@/components/UI/Buttons/Buttons';
import withAuth from '@/helpers/withAuth';
import { getTripById, postNewTrip, updateTripById } from '@/services/trips';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const UpdateMyTripDetails = ({ trips }) => {
  const router = useRouter();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      from: trips.from,
      to: trips.to,
      phone_number: trips.phone_number,
      car: trips.car,
      car_model: trips.car_model,
      car_year: trips.car_year,
      go_date: trips.go_date,
    },
  });

  const id = `-${router.query.id}`;
  const userId = useSelector((state) => state.auth.userId);

  const onSubmit = async (data) => {
    await updateTripById(id, data, userId);
    router.push('/my-trips');
  };

  return (
    <>
      <Head>
        <title>
          Update - Trip ({trips.from} - {trips.to} )
        </title>
      </Head>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='text' placeholder='From' {...register('from', {})} />
        <input type='text' placeholder='To' {...register('to', {})} />
        <input
          type='text'
          placeholder='Phone Number'
          {...register('phone_number', {})}
        />
        <input type='text' placeholder='Car' {...register('car')} />
        <input
          type='text'
          placeholder='Car Model'
          {...register('car_model', {})}
        />
        <input
          type='number'
          placeholder='Car Year'
          {...register('car_year', {})}
        />
        <input
          type='date'
          placeholder='Car Year'
          {...register('go_date', {})}
        />
        <GradientButton type='submit' className='btn_success'>
          Submit
        </GradientButton>
      </form>
    </>
  );
};

export default withAuth(UpdateMyTripDetails);

export async function getServerSideProps(context) {
  const id = `-${context.params.id}`;
  const data = await getTripById(id);

  return {
    props: {
      trips: data,
    },
  };
}
