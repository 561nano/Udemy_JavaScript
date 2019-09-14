import axios from 'axios';
import {key, proxy, APICounter} from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {

        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            APICounter();
        } catch (error) {
            console.log(`❗Failed to get results❗\n${error}`);
            alert(`❗Failed to get results❗\n${error}`);
        }
    }
}

