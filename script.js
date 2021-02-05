//API Search Parameters

let API_KEY = "SvOcsJAxXZN2HUsXCGn7rYhMfGIhEcdf";
let limit = 12;   //number of GIFs per page
let search = "cats";
let apiCall = "http://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_KEY + "&limit=" + limit;

//Fetch data from the GIF API

let request = new XMLHttpRequest();
request.open('GET',apiCall,true);
request.send();

request.onload = function () {
    
    let rawData = JSON.parse(this.response);
    console.log(rawData);  
    let gifArray = rawData.data;
    console.log(gifArray);
    let gif1 = document.getElementById("gif1");
    let gifURL1 = gifArray[0].url;
    console.log(gifURL1);
    gif1.innerHTML = `<img src= \" ${gifURL1} \"  >`;


    //gif1.innerHTML = "<iframe src=\"https://giphy.com/embed/cfuL5gqFDreXxkWQ4o\" width=\"fit-content \" height= width=\"fit-content \" frameBorder=\"0\" class=\"giphy-embed\" ></iframe>";

}



//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");