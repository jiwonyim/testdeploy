/* 
swap base url: 'https://swapi.dev/api/'

initial query people?search=luke'

JavaScript Functions as Class
Class is a blueprint for an object
and works with the new

*/

function SwapiModel(){
    // property
    this.apiBaseUrl = 'https://swapi.dev/api/';
    
    // set the initial display of dynamic views
    // method
    this.init = function(){
        const result = this.query('https://swapi.dev/api/people?search=luke')
        return result
    }
    
    // go fetch data or search query
    this.query = async function(url){
        const req = await fetch(url)
        const res = await req.json()
        return res
    }


    return this;
}

export default SwapiModel