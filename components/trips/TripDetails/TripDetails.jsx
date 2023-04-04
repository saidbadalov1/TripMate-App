import Image from 'next/image';

const TripDetails = ({ trip }) => {
  return (
    <div className='min-h-[100vh]'>
      <div className='flex justify-between border-b-2 pb-3 font-bold text-[24px]'>
        <h1>{trip.from}</h1>
        <h1>{trip.to}</h1>
      </div>
      <div>
        <Image
          src='/images/trip.jpg'
          alt='img'
          width={200}
          height={160}
          className='w-[100%] h-[200px]'
        />
      </div>
      <h3 className='font-bold mt-4 text-[20px]'>Date - {trip.go_date}</h3>
      <div className='py-3 font-medium text-[18px]'>
        <div className='flex flex-col '>
          <h3 className='font-bold'>Driver Information</h3>
          <h3>User Id - {trip.user.name}</h3>
          <h2>Phone number - {trip.phone_number}</h2>
        </div>
        <div className='flex flex-col mt-4'>
          <h3 className='font-bold'>Car Information</h3>
          <h3>
            {trip.car} {trip.car_model} {trip.car_year}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default TripDetails;
