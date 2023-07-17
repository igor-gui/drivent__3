import { getHotels } from "@/controllers/hotels-controller";
import { Router } from "express";

const hotelsRouter = Router();

hotelsRouter.get('/hotels', getHotels)

export default hotelsRouter;