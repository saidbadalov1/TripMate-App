export const getAllCars = async () => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/user-car.json`,
  );
  const data = await request.json();
  let cars = [];
  if (data) {
    trips = Object.keys(data)
      .map((key) => {
        return {
          ...data[key],
          id: key,
        };
      })
      .reverse();
  }
  return trips;
};
