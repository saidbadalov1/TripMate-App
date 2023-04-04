const TripsGrid = (props) => {
  return (
    <div className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 grid-cols-1 gap-5  mt-[30px]'>
      {props.children}
    </div>
  );
};

export default TripsGrid;
