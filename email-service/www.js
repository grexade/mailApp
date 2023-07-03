const app = require("./server");
const util = require("util");
const { API_PORT } = require("./src/config/server");
const { connect } = require("./src/lib/database");

const listen = util.promisify(app.listen.bind(app));
async function main() {
  console.log(`Connecting to db....`);
  try {
    await connect();
    console.log(`Starting up server on port ${API_PORT}`);
    await listen(API_PORT);
    console.log(`Server started on port ${API_PORT}`);
  } catch (error) {
    console.log(error.message);
  }
}

main();
