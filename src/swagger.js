const swaggerAutogen = require('swagger-autogen')();
// import {  } from "./routes/index.router.js";

const doc = {
  info: {
    title: 'Nodejs Express + PostgreSql API',
    description: 'Nodejs Express + PostgreSql API'
  },
  host: 'localhost:3000',
  schemes: ["http"],
  definitions: {
    Category: {
      id: 1,
      name: 'Importante'
    },
    Task: {
      id: 1,
      name: 'Completar Modulo tareas',
      idCategory: 1,
      category: { 
        $ref: '#/definitions/Category'
      }
    },
    AddTask:{
      name: 'Completar Modulo tareas',
      idCategory:1
    },
    AddCategory:{
      name: 'importante'
    }
  }
};

const outputFile = './swagger.json';
const endPointsFiles = ['./routes/index.router.js'];

swaggerAutogen(outputFile, endPointsFiles, doc).then(() => {
  require('./index.js');
});

