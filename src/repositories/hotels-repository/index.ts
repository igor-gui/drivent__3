import { prisma } from "@/config"
import { Hotel } from "@prisma/client"

async function getHotels(): Promise<Hotel[]> {
    return prisma.hotel.findMany()
}

async function getHotelById(): Promise<Hotel[]> {
    return
}

const hotelsRepositories = {
    getHotels,
    getHotelById
}
export default hotelsRepositories