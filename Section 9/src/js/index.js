import axios from 'axios';

async function getResults(query) {
    const proxy = ''; // https://cors-anywhere.herokuapp.com/  if Access-Control-Allow-Origin is error
    const key = '11e0fd5df169ec583ec0d0e154028006';
    try {
        const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}

getResults('chicken');

