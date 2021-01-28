function SearchController (model, searchView, resultsView){
    this.model = model;
    this.searchView = searchView;
    this.resultsView = resultsView;

    this.configUI = async function(){
        // call on the model to init (do the initial data fetch)
        const data = await model.init();
        this.resultsView.configUI(data.results[0])
    }

    this.configUI()

    return this
}

export default SearchController