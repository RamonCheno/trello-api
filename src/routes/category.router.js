const express = require("express");
const categoryController = require("../controller/category.controllers");

const router = express.Router();

router
    .get('/all', categoryController.getAll)
    .get('/:id', categoryController.getById)
    .post('/new', categoryController.create)
    .put('/:id', categoryController.update)
    .delete('/:id', categoryController._delete);

module.exports = router;