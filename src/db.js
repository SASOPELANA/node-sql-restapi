import { createPool } from "mysql2/promise";
import { DB_HOST, DB_USER, DB_PASSWORD, DB_PORT, DB_NAME } from "./config.js";

export const pool = createPool({
	host: DB_HOST,
	user: DB_USER,
	password: DB_PASSWORD,
	port: DB_PORT,
	database: DB_NAME,
});

export const conectDB = async () => {
	try {
		const connection = await pool.getConnection();
		connection.release();
		console.log(">>> DB is connected <<<");
	} catch (error) {
		console.log("DB not connected", error);
		//throw error;
	}
};
