import * as categoryModelJs from "../model/category.model.js";
import { Router } from "express";

const routerCategory = Router();

routerCategory.get("/all", async (req, res) => {
    const categoryAll = await categoryModelJs.getCategoryAll();
    res.status(200).json(categoryAll);
});

routerCategory.get('/:id', async (req, res) => {
    const id = req.params.id;
    const categoryById = await categoryModelJs.getCategoryById(id);
    res.status(200).json(categoryById);
});

routerCategory.post('/new', async (req, res) => {
    const { nameCategory } = req.body;
    if (nameCategory === "" || nameCategory == null || nameCategory.length === 0) {
        res.status(404).json({
            messagge: "valor vacio"
        })
    } else {
        const newCategory = await categoryModelJs.insertCategory(nameCategory);
        res.status(201).json(newCategory);
    }
});

routerCategory.put('/:id', async (req, res) => {

    const { nameCategory } = req.body;

    if (nameCategory === "" || nameCategory == null || nameCategory.length === 0) {
        res.status(404).json({
            messagge: "valor vacio"
        })
    } else {
        const categoryUp = await categoryModelJs.updateCategory(req.params.id, nameCategory);
        res.status(200).json(categoryUp);
    }
});

routerCategory.delete("/:id", async (req, res) => {
    const deleteName = categoryModelJs.deleteNameCategory(req.params.id);
    res.status(200).json(deleteName);
});

routerCategory.delete("/last", async (req, res) =>{
    const deleteLast = categoryModelJs.deleteLastCategory();
    res.status(200).json({messagge: "Ultimo elemento eliminado", body: deleteLast});
});

export default routerCategory;
