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

export const deleteEmployee = async (req, res) => {
	const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
		req.params.id,
	]);
	//console.log(result);

	if (result.affectedRows <= 0)
		return res.status(404).json({
			message: "Employee not found.",
		});

	res.sendStatus(200);
};

export const updateEmployee = async (req, res) => {
	const { id } = req.params;

	const { name, apellido, salary } = req.body;

	// Metodo de mysql para actualizar datos que no sean nulos
	const [result] = await pool.query(
		"UPDATE employee SET name = IFNULL(?,name), apellido =  IFNULL(?,apellido), salary = IFNULL(?,salary) WHERE id = ? ",
		[name, apellido, salary, id],
	);

	if (result.affectedRows <= 0)
		return res.status(404).json({ message: "Employee not found." });

	//console.log(result);

	const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

	res.json(rows[0]);
};
