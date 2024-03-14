import swaggerAutogen from 'swagger-autogen';

const doc = {
  info: {
    title: 'Nodejs Express + PostgreSql API',
    description: 'Nodejs Express + PostgreSql API'
  },
  host: 'localhost:4000',
  schemes: ["http"],
};

const outputFile = './swagger.json';
const endPointsFiles = ['./controllers/index.controllers.js'];

swaggerAutogen()(outputFile, endPointsFiles, doc).then(async () => {
  await import('./index.js');
});

