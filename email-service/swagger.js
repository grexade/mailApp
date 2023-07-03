const swaggerAutogen = require("swagger-autogen")();
const outputFile = "./swagger_output.json";
const doc = {
  info: {
    version: "1.0.0",
    title: "Email Service API",
    description: "Endpoints for email service",
  },
  host: `${process.env.SERVER_URL}\ ${process.env.API_PORT}`,
  basePath: `${process.env.BASE_PATH}`,
  schemes: ["http", "https"],
  consumes: ["application/json"],
  produces: ["application/json"],
  securityDefinitions: {
    api_key: {
      type: "apiKey",
      name: "x-access-token",
      in: "header",
    },
  },
};
swaggerAutogen(outputFile, ["./src/routes/index.js"], doc).then(() => {
  require("./server");
  console.log("Swagger doc generated successfully!");
});
