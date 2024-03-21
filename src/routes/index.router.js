const express = require("express");
const categoryRouter = require('./category.router');
const tasksRouter = require('./tasks.router');

function routerApi(app){
    const router = express.Router();
    app.use('/api/v1', router);
    router.use("/category", categoryRouter);
    router.use('/tasks', tasksRouter);
}

module.exports = routerApi;