const express = require("express");
const routerApi = require('./routes/index.routes');
const swaggerDocs = require("./controller/swagger.controller");
// require('../.env');
const cors = require("cors");

// const envFile = [];



require('dotenv').config();
const app = express();

const port = process.env.PORT || 3000;
// console.log(process.env);
// console.log(`NODE_ENV=${process.env.NODE_ENV}`);

//middlewares
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS', 'PUT', 'DELETE']
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

routerApi(app);

app.use(swaggerDocs);

app.listen(port, () => {
    console.log("servidor en puerto:", port);
});