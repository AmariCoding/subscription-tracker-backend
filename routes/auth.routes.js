import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  res.send({ title: "Sign Up" });
});

export default authRouter;
