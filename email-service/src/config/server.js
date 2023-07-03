const config = {
  development: {
    API_PORT: process.env.API_PORT,
    BASE_PATH: process.env.BASE_PATH,
    SERVER_URL: process.env.SERVER_URL,
    HTTP_PROTOCOL: process.env.HTTP_PROTOCOL || "http://",
    NODE_ENV: process.env.NODE_ENV,
    COOKIE_SECRET: process.env.COOKIE_SECRET,
    SECRET: process.env.SECRET,
  },
};
module.exports = config[process.env.NODE_ENV || "development"];
