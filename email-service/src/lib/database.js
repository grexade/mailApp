const mongoose = require("mongoose");
const {
  MONGO_CONNECTION_TYPE,
  MONGO_PORT,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_URL,
  MONGO_DB,
  options,
} = require("../config/database");

module.exports = {
  connect: async () => {
    const connectionType = MONGO_CONNECTION_TYPE,
      port = MONGO_PORT,
      user = MONGO_USER,
      password = MONGO_PASSWORD,
      host = MONGO_URL,
      db = MONGO_DB;
    // const connectionString = `${connectionType}://${user}:${password}@${host}${
    //   port ? ":" + port : ""
    // }/${db}?retryWrites=true&w=majority`;

    
    const connectionString = `mongodb+srv://${user}:${password}@cluster0.dahrqrz.mongodb.net/?retryWrites=true&w=majority`;
    console.log(connectionString);
    try {
      mongoose
        .connect(connectionString)
        .then((res) => {
          if (res) {
            console.log("connected to database successfully!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } catch (error) {
      console.log(error);
    }
  },
};
