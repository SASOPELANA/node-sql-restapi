import app from "./app.js";
import { PORT } from "./config.js";
import { conectDB } from "./db.js";

conectDB();

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
});
