import { getHotels } from "@/controllers/hotels-controller";
import { authenticateToken } from "@/middlewares";
import { Router } from "express";

const hotelsRouter = Router();


hotelsRouter
    .all('/*', authenticateToken)
    .get('/hotels', getHotels)
    .get('/hotels/:id' )

export default hotelsRouter;