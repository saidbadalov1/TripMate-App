import { GradientButton } from '@/components/UI/Buttons/Buttons';
import { postNewTrip } from '@/services/trips';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const NewTripForm = () => {
  const userID = useSelector((state) => state.auth.userId);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await postNewTrip(data, userID);
    router.push('/my-trips');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type='text'
        placeholder='From'
        {...register('from', { required: true, maxLength: 15 })}
      />

      <input
        type='text'
        placeholder='To'
        {...register('to', { required: true, maxLength: 15 })}
      />
      <input
        type='text'
        placeholder='Phone Number (0555555555)'
        {...register('phone_number', { required: true, maxLength: 15 })}
      />
      <input
        type='text'
        placeholder='Car'
        {...register('car', { required: true, maxLength: 15 })}
      />
      <input
        type='text'
        placeholder='Car Model'
        {...register('car_model', { required: true, maxLength: 15 })}
      />
      <input
        type='number'
        placeholder='Car Year'
        {...register('car_year', { required: true, maxLength: 4 })}
      />
      <input
        type='date'
        placeholder='Car Year'
        {...register('go_date', { required: true, maxLength: 15 })}
        min={new Date().toISOString().split('T')[0]}
      />

      {Object.keys(errors).length > 0 && (
        <div
          className='flex p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400'
          role='alert'
        >
          <svg
            className='flex-shrink-0 inline w-5 h-5 mr-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Danger</span>
          <div>
            <span className='font-medium'>
              Ensure that these requirements are met:
            </span>
            <ul className='mt-1.5 ml-4 list-disc list-inside'>
              <li>At least 1 characters (and up to 15 characters)</li>
            </ul>
          </div>
        </div>
      )}
      <GradientButton type='submit'>Submit</GradientButton>
    </form>
  );
};

export default NewTripForm;
