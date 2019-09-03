import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        const proxy = ''; // https://cors-anywhere.herokuapp.com/  if Access-Control-Allow-Origin is error
        const key = '11e0fd5df169ec583ec0d0e154028006';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}

