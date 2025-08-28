import { Router } from "express";

import { ping } from "../controllers/index.controller.js";

const router = Router();

// coneccion a bases de datos --> mariadb
router.get("/ping", ping);

export default router;
