export const getAllTrips = async () => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/trips.json`,
  );
  const data = await request.json();
  let trips = [];
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

export const getTripsByUser = async (id) => {
  const data = await getAllTrips();
  let trips = [];
  if (data.length > 0) {
    trips = data.filter((trip) => trip.user?.id === id);
  }
  return trips;
};

export const postNewTrip = async (req, userId) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/trips.json`,
    {
      method: 'POST',
      body: JSON.stringify({
        car: req.car,
        car_year: req.car_year,
        car_model: req.car_model,
        from: req.from,
        go_date: req.go_date,
        phone_number: req.phone_number,
        to: req.to,
        user: {
          id: userId,
          name: userId,
        },
      }),
    },
  );
  const response = await request.json();
  return response;
};

export const getTripById = async (id) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/trips/${id}.json`,
  );
  const trips = await request.json();

  return trips;
};

export const updateTripById = async (id, req, userId) => {
  await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/trips/${id}.json`, {
    method: 'PUT',
    body: JSON.stringify({
      car: req.car,
      car_year: req.car_year,
      car_model: req.car_model,
      from: req.from,
      go_date: req.go_date,
      phone_number: req.phone_number,
      to: req.to,
      user: {
        id: userId,
        name: userId,
      },
    }),
  });
};

export const deleteTripById = async (id) => {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/tripy/trips/${id}.json`,
    {
      method: 'DELETE',
    },
  );
  const response = await request.json();
  return response;
};
