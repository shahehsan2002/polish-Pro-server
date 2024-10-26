import express, { Request, Response } from "express";
import { ServiceRoutes } from "./modules/service/service.route";
import { SlotRoutes } from "./modules/slot/slot.route";
// import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

// Parser
app.use(express.json());

// Routes
// app.use("/api/movies", MovieRoutes);
app.use("/api/services",ServiceRoutes)
app.use("/api/slots",SlotRoutes)
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
