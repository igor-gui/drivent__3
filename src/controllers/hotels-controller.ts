import hotelsServices from "@/services/hotels-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req: Request, res: Response){
    try {
        const hotels = hotelsServices.getAllHotels()
        return res.status(httpStatus.OK).send(hotels)
    } catch (error) {
        return res.status(httpStatus.INTERNAL_SERVER_ERROR).send()
    }
}