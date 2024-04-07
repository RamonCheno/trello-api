const express = require("express");
const routerApi = require('./src/routes/index.routes');
const swaggerDocs = require("./src/controller/swagger.controller");
// require('./.env.production');
const cors = require("cors");

// const envFile = [];



require('dotenv').config({
    path: './.env.development.local'
});
const app = express();

const port = process.env.PORT || 3000;
console.log(process.env);
console.log(`NODE_ENV=${process.env.NODE_ENV}`);

const corsOption = {
    origin: "http://192.168.1.82:5173",
    methods: ["POST", "GET"],
    credential: true,
}

//middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

routerApi(app);

app.use(swaggerDocs);

app.listen(port, () => {
    console.log("servidor en puerto:", port);
});