import express, { Request, Response } from "express";
import { ServiceRoutes } from "./modules/service/service.route";
import { SlotRoutes } from "./modules/slot/slot.route";
import { BookingRoutes } from "./modules/booking/booking.route";
import { UserRoutes } from "./modules/user/user.route";
import { AuthRoutes } from "./modules/auth/auth.route";
// import { MovieRoutes } from "./modules/movies/movie.route";
const app = express();

// Parser
app.use(express.json());

// Routes
// app.use("/api/movies", MovieRoutes);
app.use("/api/services", ServiceRoutes);
app.use("/api/slots", SlotRoutes);
app.use("/api/bookings", BookingRoutes);
app.use("/api/users", UserRoutes);
app.use("/api/auth", AuthRoutes);
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

export default app;
