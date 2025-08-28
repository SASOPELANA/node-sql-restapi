import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.send(rows);
};

export const createEmployee = async (req, res) => {
  const { name, apellido, salary } = req.body;
  const [rows] = await pool.query(
    "INSERT INTO employee (name,apellido,salary) VALUES(?,?,?) ",
    [name, apellido, salary],
  );

  res.send({
    id: rows.insertId,
    name,
    apellido,
    salary,
  });
};

export const updateEmployee = (req, res) => {
  res.send("Actualizar empleados.");
};

export const deleteEmployee = (req, res) => {
  res.send("Eliminando empleados.");
};
