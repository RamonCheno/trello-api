import express, { json, urlencoded } from "express";
import appRoute from "./controllers/index.controllers.js";
import swaggerDocs from "./controllers/swagger.controller.js";
import cors from "cors";
import http from "http";

const app = express();
const corsOpton = {
    origin: "http://192.168.1.82:5173",
    methods: ["POST", "GET"],
    credential: true,
}

// const host = '192.168.1.82';
// const port = 8080;
// const server = http.createServer();

//middlewares
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cors(corsOpton));

//routes
app.use(appRoute);
// server.listen(port, host, () => {
//     console.log(`Servidor corriendo en http://${host}:${port}`);
// });
app.listen(8080, () => {
    console.log("servidor en puerto 8080");
});
app.use(swaggerDocs);