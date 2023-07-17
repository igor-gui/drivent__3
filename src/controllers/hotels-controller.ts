import { AuthenticatedRequest } from "@/middlewares";
import hotelsServices from "@/services/hotels-service";
import { Response } from "express";
import httpStatus from "http-status";

export async function getHotels(req: AuthenticatedRequest, res: Response) {
    try {
        const hotels = hotelsServices.getAllHotels()
        return res.status(httpStatus.OK).send(hotels)
    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send()
    }
}

export async function getHotelById(req: AuthenticatedRequest, res: Response) {
    const { userId } = req;
    try {

    } catch (error) {
        return res.status(httpStatus.UNAUTHORIZED).send(error.message)
    }
}