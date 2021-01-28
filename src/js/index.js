/* 
    ES Modules
    - strict
    - undefined
*/

import SwapiModel from "./models/swapi.js";
import SearchView from "./views/search-view";
import ResultsView from "./views/results-view";
import SearchController from "./controllers/search-controller";

/* 
MVC setup
2 views
1 model
1 controller
*/

const swapiModel = new SwapiModel();
const searchView = new SearchView('#search');
const resultsView = new ResultsView('#results');
const searchController = new SearchController(swapiModel, searchView, resultsView);

console.log(searchController)