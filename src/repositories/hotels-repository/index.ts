import { prisma } from "@/config"
import { Hotel } from "@prisma/client"

async function getHotels(): Promise<Hotel[]> {
    return await prisma.hotel.findMany()
}

async function getHotelById(id: number): Promise<Hotel> {
    return prisma.hotel.findFirst({
        where: {
            id
        }
    })
}

const hotelsRepositories = {
    getHotels,
    getHotelById
}
export default hotelsRepositories