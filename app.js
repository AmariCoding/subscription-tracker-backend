import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import subRouter from "./routes/subcription.route.js";
import authRouter from "./routes/auth.routes.js";

const app = express();

//This is from routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subRouter);

app.get("/", (req, res) => {
  res.send("Welcome to Subscription Tracker API");
});

app.listen(PORT, () => {
  console.log(
    `Subscription Tracker API is running on http://localhost:${PORT}`
  );
});

export default app;
