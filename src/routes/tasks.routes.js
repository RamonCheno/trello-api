const express = require("express");
const taskController = require("../controller/task.controllers");

const router = express.Router();

router
    .get("/all", taskController.getAll)
    .get("/:id", taskController.getById)
    .post("/new", taskController.create)
    .put("/:id", taskController.update)
    .delete("/:id", taskController._delete);

router.get("/all/complete-task", taskController.getByComplete);

module.exports = router;