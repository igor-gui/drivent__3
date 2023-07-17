import hotelsRepositories from "@/repositories/hotels-repository";

async function getAllHotels(){
    const hotelsArray = await hotelsRepositories.getHotels();
    return hotelsArray;
}

const hotelsServices = {
    getAllHotels
};
export default hotelsServices;