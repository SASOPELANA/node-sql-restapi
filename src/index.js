import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(express.json());

app.use(indexRoutes);
app.use("/api", employeesRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
