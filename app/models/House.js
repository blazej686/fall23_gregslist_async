export class House {
    constructor(data) {

        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.description = data.description
        this.imgUrl = data.imgUrl
        this.levels = data.levels
        this.price = data.price
        this.year = data.year
        this.creator = data.creator

    }

    get HouseCardTemplate() {

        return `
        <div class="col-12-md-4 mb-2 p-4">
            <div class="card bg-light d-flex">
              <img class="house-img" src="${this.imgUrl}" alt="${this.creator.name}">
              <div>
                <h3>$${this.price} ${this.bedrooms} Bedrooms ${this.bathrooms} Bathrooms </h3>
                <p>Number of levels: ${this.levels}</p>
                <p>Year Built: ${this.year}</p>
                <p>Description: ${this.description}</p>
              </div>
              <div>
              <button onclick="removeHouse(${this.id})" class="btn btn-danger">Delete House</button>
              </div>

            </div>

          </div> 
        `
    }

    static get HouseFormTemplate() {
        return `
        <div class="col-12 col-md-8 p-4">
            <form onsubmit="app.HousesController.createHouse(event)">
                 <div class="mb-2">
                    <label for="imgUrl">Image URL</label>
                    <input id="imgUrl" type="url"  maxlength="500" name="imgUrl" placeholder="imgUrl">
                    <label for="Price">Price</label>
                    <input id="Price" type="number" required name="price" placeholder="Price">
                    <label for="bedrooms">Bedrooms</label>
                    <input id="bedrooms" type="number" required  name="bedrooms" placeholder="Bedrooms">
                    <label for="Bathrooms">Bathrooms</label>
                    <input id="Bathrooms" type="number" required  name="bathrooms" placeholder="Bathrooms">
                    <label for="levels">Levels</label>
                    <input id="levels" type="number" required  name="levels" placeholder="Levels">
                    <label for="year">Year</label>
                    <input id="year" type="number" required name="year" placeholder="Year">
                    <label for="description">Description</label>
                    <input id="description" type="text" required maxlength="500" name="description" placeholder="Description...">
                </div>
                <button class="btn btn-primary">List House</button>
            </form>
        </div>
        
        `
    }
}