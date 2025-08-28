import { pool } from "../db.js";

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");
  res.send(rows);
};

export const getEmployee = async (req, res) => {
  console.log(req.params.id);
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({
      message: "Employee not found",
    });

  res.json(rows[0]);
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
