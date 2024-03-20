const express = require("express");
const swaggerFile = require('../swagger.json');
const swaggerUi = require('swagger-ui-express')
const swaggerDocs = express();
swaggerDocs.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
module.exports = swaggerDocs;