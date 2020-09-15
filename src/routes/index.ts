import express from "express";
const app = express();

import userRoutes from "./userRoutes";
import courseRoutes from "./courseRoutes";

app.use("/users", userRoutes);
app.use("/courses", courseRoutes);

export default app;
