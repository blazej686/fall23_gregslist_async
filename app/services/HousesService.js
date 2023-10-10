import { AppState } from "../AppState.js";
import { House } from "../models/House.js";
import { api } from "./AxiosService.js";

class HousesService {
    async createHouse(houseFormData) {
        const res = await api.post('api/houses', houseFormData)
        console.log('house form data in service', houseFormData);
        const newHouse = new House(res.data)
        AppState.houses.push(newHouse)
        AppState.emit('houses')

    }

    async getHouses() {
        const res = await api.get('api/houses')
        const newHouses = res.data.map(housePOJO => new House(housePOJO))
        AppState.houses = newHouses
    }

    async removeHouse(houseId) {

        const res = await api.delete(`api/houses/${houseId}`)
        const houseIndex = AppState.houses.findIndex(house => house.id == houseId)
        AppState.houses.splice(houseIndex, 1)
        AppState.emit('houses')
    }
}


export const housesService = new HousesService()