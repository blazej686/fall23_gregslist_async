import { Pop } from "../utils/Pop.js";
import { housesService } from "../services/HousesService.js";
import { AppState } from "../AppState.js";
import { setHTML } from "../utils/Writer.js";
import { House } from "../models/House.js";
import { getFormData } from "../utils/FormHandler.js";

function _drawHouses() {
    const houses = AppState.houses
    let content = ''
    houses.forEach(house => content += house.HouseCardTemplate)
    setHTML('houseCards', content)
}

function _drawHouseForm() {

    setHTML('houseForm', House.HouseFormTemplate)
}


export class HousesController {
    constructor() {
        _drawHouseForm()
        this.getHouses()

        AppState.on('houses', _drawHouseForm)
        AppState.on('houses', _drawHouses)

    }

    async getHouses() {

        try {
            await housesService.getHouses()

        } catch (error) {
            Pop.error(error)
            console.log(error)
        }
    }

    async createHouse(event) {
        try {
            event.preventDefault()
            const form = event.target
            const houseFormData = getFormData(form)
            // console.log(houseFormData);
            await housesService.createHouse(houseFormData)
            // form.reset()
            Pop.success('Your House Has Been Listed')

        } catch (error) {
            Pop.error(error)
            console.log(error)

        }
    }

    async removeHouse(houseId) {
        try {
            const wantsToDelete = await Pop.confirm('Are you sure')
            if (!wantsToDelete) {
                return
            }
            await housesService.removeHouse(houseId)
        } catch (error) {
            Pop.error(error)
            console.log(error)
        }

    }
}