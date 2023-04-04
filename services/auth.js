export async function signUp(data) {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}accounts:signUp?key=${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
    },
  );

  const response = await request.json();

  return response;
}

export async function signin(data) {
  const request = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_URL}accounts:signInWithPassword?key=${process.env.NEXT_PUBLIC_AUTH_KEY}`,
    {
      method: 'POST',
      body: JSON.stringify({
        email: data.email,
        password: data.password,
        returnSecureToken: true,
      }),
    },
  );

  const response = await request.json();

  return response;
}
