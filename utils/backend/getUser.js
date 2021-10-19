const getUser = async (req) => {
  try {
    const { jwt } = req.cookies;
    let res = await fetch(`${process.env.AUTH_SERVER}/api/v1/app/verifyUser`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        jwt,
        appToken: process.env.APP_KEY,
      }),
    });
    res = await res.json();
    return res.user;
  } catch (error) {
    return null;
  }
};

export default getUser;
