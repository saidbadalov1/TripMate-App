import { GradientButton } from '@/components/UI/Buttons/Buttons';
import React from 'react';
import { useForm } from 'react-hook-form';

const NewCar = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        type='text'
        placeholder='Car Year'
        {...register('car_year', { required: true, maxLength: 4 })}
      />
      <GradientButton type='submit'>Submit</GradientButton>
    </form>
  );
};

export default NewCar;
