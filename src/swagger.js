const swaggerAutogen = require('swagger-autogen')();
// import {  } from "./routes/index.router.js";

const doc = {
  info: {
    title: 'Nodejs Express + PostgreSql API',
    description: 'Nodejs Express + PostgreSql API'
  },
  host: 'localhost:3000',
  schemes: ["http"],
};

const outputFile = './swagger.json';
const endPointsFiles = ['./routes/index.router.js'];

swaggerAutogen(outputFile, endPointsFiles, doc).then(() => {
  require('./index.js');
});

