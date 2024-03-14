import { Router } from "express";

import routerCategory from "./category.controller.js";

const router = Router();

router.use('/category', routerCategory)
router.use("/task");
export default router;
