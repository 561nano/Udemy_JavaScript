import axios from 'axios';
import {key, proxy} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id;
    }
    
    async getRecipes() {
        try {
            const result = await axios(`${proxy}https://www.food2fork.com/api/get?key=${key}&rId=${this.id}`);
            this.title = result.data.recipe.title;
            this.author = result.data.recipe.publisher;
            this.img = result.data.recipe.image_url;
            this.url = result.data.recipe.source_url;
            this.ingredients = result.data.recipe.ingredients;
        } catch (error) {
            console.log(error);
            alert('😮 Something went Wrong 😮')
        }
    }
    calcTime() {
        // Assuming each 3 ingredients take 15 minutes to cook
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServing() {
        this.servings = 4;
    }
}
