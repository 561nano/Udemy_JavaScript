import str from './models/Search'; //method 1 to import
//import {add as a, multiply as b, ID} from "./views/searchView"; //method 2 to import
import * as searchView from "./views/searchView"; //method 3 to import

console.log(`Using imported functions! ${searchView.add(searchView.ID,2)} and ${searchView.multiply(3,5)} from searchView.js. ${str}`);

