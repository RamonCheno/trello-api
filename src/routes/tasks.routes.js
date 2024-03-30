const express = require("express");
const taskController = require("../controller/task.controllers");

const router = express.Router();

router
    .get("/all", taskController.getAll)
    .get("/:id", taskController.getById)
    .put("/:id", taskController.update)
    .delete("/:id", taskController._delete)
    .post("/new", taskController.create);

module.exports = router;