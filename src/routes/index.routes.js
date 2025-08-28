import { Router } from "express";
import { pool } from "../db.js";

const router = Router();

// coneccion a bases de datos --> mariadb
router.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 5 + 2 AS Resultado");
  res.json(result[0]);
});

export default router;
