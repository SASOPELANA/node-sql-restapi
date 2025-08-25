import express from "express";
import { pool } from "./db.js";

const app = express();

// coneccion a bases de datos --> mariadb
app.get("/ping", async (req, res) => {
  const [result] = await pool.query("SELECT 5 + 2 AS Resultado");
  res.json(result[0]);
});

app.get("/employees", (req, res) => {
  res.send("Obtener todos los empleados.");
});

app.post("/employees", (req, res) => {
  res.send("Creando empleados.");
});

app.put("/employees", (req, res) => {
  res.send("Actualizar empleados.");
});

app.delete("/employees", (req, res) => {
  res.send("Eliminando empleados.");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
