const config = {
  development: {
    MONGO_URL: process.env.MONGO_URL,
    MONGO_DB: process.env.MONGO_DB,
    MONGO_PORT: process.env.MONGO_PORT,
    MONGO_CONNECTION_TYPE: process.env.MONGO_CONNECTION_TYPE,
    MONGO_USER: process.env.MONGO_USER,
    MONGO_PASSWORD: process.env.MONGO_PASSWORD,
    options: {
      promiseLibrary: global.Promise,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
};
module.exports = config[process.env.NODE_ENV || "development"];
