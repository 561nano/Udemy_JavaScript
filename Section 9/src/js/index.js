import Search from "./models/Search";
import Recipe from "./models/Recipe";
import * as searchView from './views/searchView'
import {elements, renderLoader, clearLoader} from "./views/base";

/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};


/**
 * SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1) Get query from view
    const query = searchView.getInput();

    if (query) {
        // 2) New search object and add to state
        state.search = new Search(query);

        // 3) Prepare the UI for results
        searchView.clearInput();
        searchView.clearResults();
        renderLoader(elements.searchResult);

        try {
            // 4) Search for recipes
            await state.search.getResults();

            // 5) Render result on UI
            clearLoader();
            searchView.renderResults(state.search.result);
        } catch (error) {
            alert(`💔 Something wrong with the search💔\n ${error}`);
            console.log(`💔 Something wrong with the search💔\n ${error}`);
            clearLoader();
        }

    }
};

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
});

elements.searchResultPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if (btn) {
        const goToPage = parseInt(btn.dataset.goto, 10);
        searchView.clearResults();
        searchView.renderResults(state.search.result, goToPage);
    }
});

/**
 * RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    // this grabs the http://localhost:8080/ {#47746} this from the current url
    // & replaces the # with nothing
    const id = window.location.hash.replace('#', '');
    console.log(id);

    if (id) {
        // Prepare UI for changes

        // Create new recipe object
        state.recipe = new Recipe(id);

        try {
            // Get recipe data
            await state.recipe.getRecipes();
            // Calculate serving and time
            state.recipe.calcTime();
            state.recipe.calcServing();
            // Render recipe
            console.log(state.recipe);
        } catch (error) {
            alert(`🔴 Error 🔴 processing recipe!\n no 🍕🍕🍕 for you!\n ${error}`);
            console.log(`🔴 Error 🔴 processing recipe!\n no 🍕🍕🍕 for you!\n ${error}`);

        }
    }
};

['hashchange', 'load'].forEach(event => window.addEventListener(event, controlRecipe));
