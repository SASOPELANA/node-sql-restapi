import { pool } from "../db.js";

export const ping = async (req, res) => {
  const [result] = await pool.query("SELECT 5 + 2 AS Resultado");
  res.json(result[0]);
};
