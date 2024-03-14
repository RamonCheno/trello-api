import express, { json, urlencoded } from "express";
import appRoute from "./controllers/index.controllers.js";
import swaggerDocs from "./controllers/swagger.controller.js";

const app = express();

//middlewares
app.use(json());
app.use(urlencoded({ extended: false }));

//routes
app.use(appRoute);
app.listen(4000, () => {
    console.log("servidor en puerto 4000");
});
app.use(swaggerDocs);