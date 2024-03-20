const express = require("express");
const routerApi = require('./routes/index.router');
const swaggerDocs = require( "./controller/swagger.controller");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT || 8080;

const corsOpton = {
    origin: "http://192.168.1.82:5173",
    methods: ["POST", "GET"],
    credential: true,
}

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors(corsOpton));

//routes
routerApi(app);

app.listen(port, () => {
    console.log("servidor en puerto ", port);
});
app.use(swaggerDocs);