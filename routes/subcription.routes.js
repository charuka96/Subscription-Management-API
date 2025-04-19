import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription } from "../controllers/subscription.controller.js";

const subcriptionRouter = Router();

subcriptionRouter.get("/", (req, res) =>
  res.send({ title: "Get all subcription" })
);
subcriptionRouter.get("/:id", (req, res) =>
  res.send({ title: "Get id subcription" })
);
subcriptionRouter.post("/", authorize, createSubscription);
subcriptionRouter.put("/:id", (req, res) =>
  res.send({ title: "updat all subcription" })
);
subcriptionRouter.delete("/:id", (req, res) =>
  res.send({ title: "delee all subcription" })
);
subcriptionRouter.get("/user/:id", (req, res) =>
  res.send({ title: "get all user subcription" })
);
subcriptionRouter.put("/:id/cancel", (req, res) =>
  res.send({ title: "cancel useer subcription" })
);
subcriptionRouter.get("/upcoming-renowels", (req, res) =>
  res.send({ title: "get  upcoming renowels  subcription" })
);

export default subcriptionRouter;
