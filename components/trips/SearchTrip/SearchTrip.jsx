import { GradientButton } from '@/components/UI/Buttons/Buttons';
import { change } from '@/store/features/citySlice';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

const SearchTrip = () => {
  const [cityValue, setCityValue] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(change(cityValue));
  }, [cityValue]);

  return (
    <form>
      <div>
        <input
          value={cityValue}
          onChange={(e) => setCityValue(e.target.value)}
          type='text'
          className='bg-transparent shadow-2xl text-[14px]'
          placeholder='Search region'
        />
        <GradientButton type='button' className='mt-2'>
          Search
        </GradientButton>
      </div>
    </form>
  );
};

export default SearchTrip;
