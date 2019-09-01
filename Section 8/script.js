/*
const second = () => {
    setTimeout(() => {
        console.log('Async Hey there');
    }, 2000);
};

const first = () => {
    console.log('Hey there');
    second();
    console.log('The end');
};
first();

*/

/*
function getRecipe() {
    setTimeout(() => {
        const recipeID = [523, 883, 432, 974];
        console.log(recipeID);

        setTimeout(id => {
            const recipe = {title: 'Fresh tomato pasta', publisher: 'Christian'};
            console.log(`${id}: ${recipe.title}`);

            setTimeout(publisher => {
                const recipe2 = {title: 'Italian Pizza', publisher: 'Christian'};
                console.log(recipe);
            }, 1500, recipe.publisher);
        }, 1500, recipeID[2]);
    }, 1500);
}

getRecipe();
*/

/*
const getIDs = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([523, 883, 432, 974]);
    }, 1500);
});

const getRecipe = recID => {
    return new Promise((resolve, reject) => {
        setTimeout(ID => {
            const recipe = {title: 'Fresh tomato pasta', Publisher: 'Christian'};
            resolve(`${ID}: ${recipe.title}`);
        }, 1500, recID)
    });
};

const getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            const recipe = {title: 'Italian Pizza', publisher: 'Christian'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1500, publisher);
    });
};

/!*
getIDs
    .then(IDs => {
        console.log(IDs);
        return getRecipe(IDs[2]);
    })
    .then(recipe => {
        console.log(recipe);
        return getRelated('Christian');
    })
    .then(recipe => {
        console.log(recipe);
    })
    .catch(error => {
        console.log(error);
    });
    *!/

async function getRecipesAW() {
    const IDs = await getIDs;
    console.log(IDs);
    const recipe = await getRecipe(IDs[2]);
    console.log(recipe);
    const related = await getRelated('Christian');
    console.log(related);

    return recipe;
}

getRecipesAW().then(result => console.log('It worked'));*/

function getWeather(woeid = 2487956) {
    fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`)
        .then(result => {
            //console.log(result);
            return result.json();
        })
        .then(data => {
            //console.log(data);
            const today = data.consolidated_weather[0];
            console.log(`Temperatures Today in ${data.title} stays between ${today.min_temp} and ${today.max_temp}.`);
        })
        .catch(error => {
            alert("Nope")
        });
}
getWeather(44418);
getWeather();


async function getWeatherAW(woeid = 2487956) {
    try {
        const result = await fetch(`https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/${woeid}/`);
        const data = await result.json();
        // console.log(data);
        const tomorrow = data.consolidated_weather[1];
        console.log(`Temperatures for tomorrow in ${data.title} stays between ${tomorrow.min_temp} and ${tomorrow.max_temp}.`);
        return data;
    } catch (error) {
        alert(error);
    }
}
getWeatherAW(44418);
getWeatherAW();

let dataLondon;
getWeatherAW(44418).then(data => {
    dataLondon = data;
    console.log(dataLondon);
});