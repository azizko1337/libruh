module.exports = {
  reactStrictMode: true,

  env: {
    THIS: process.env.THIS,
    APP_KEY: process.env.APP_KEY,
    DATABASE_URL: process.env.DATABASE_URL,
    AUTH_SERVER: process.env.AUTH_SERVER,
  },
};
