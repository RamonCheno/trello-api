const express = require("express");
const routerApi = require('./routes/index.routes');
const swaggerDocs = require("./controller/swagger.controller");
const cors = require("cors");
const dotenv = require('dotenv');

dotenv.config();
const app = express();

const port = process.env.PORT || 3000;

// const corsOpton = {
//     origin: "http://192.168.1.82:5173",
//     methods: ["POST", "GET"],
//     credential: true,
// }

const corsOption = {
    origin: "http://localhost:5173"
};

//middlewares
app.use(cors(corsOption));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes

routerApi(app);

app.use(swaggerDocs);

app.listen(port, () => {
    console.log("servidor en puerto ", port);
});