//API Search Parameters

let API_KEY = "SvOcsJAxXZN2HUsXCGn7rYhMfGIhEcdf";
let limit = 12;   //number of GIFs per page
let search;

//Retrieving gifSearch from HTML

function fetchGifSearch(e) {
    
    
    search = document.getElementById("gifSearch").value;
    // console.log("search:", search);
    


    console.log("search:", search);
    let apiCall = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=" + API_KEY + "&limit=" + limit;



    //Fetch data from the GIF API

    let request = new XMLHttpRequest();
    request.open('GET', apiCall, true);
    request.send();

    request.onload = function () {
    
        //Get GIF array,which from response
        let rawData = JSON.parse(this.response);
        console.log(rawData);
        let gifArray = rawData.data;
        console.log(gifArray);

        //Clearing the div containing previous search results

        let searchResultsContainer= document.getElementById("search-results");  //div containing search results
        while (searchResultsContainer.firstChild)
        {
            searchResultsContainer.removeChild(searchResultsContainer.lastChild);

        }

        //Generate 3 rows with 4 columns each to accomodate 12 GIFs

        let row1 = document.createElement("div");
        row1.setAttribute("class", "row mt-4");

        let row2 = document.createElement("div");
        row2.setAttribute("class", "row mt-4");

        let row3 = document.createElement("div");
        row3.setAttribute("class", "row mt-4 mb-4");

        

    
        //Appending each row to the searchResultsContainer
        
        searchResultsContainer.append(row1, row2, row3);

        //Generating the columns and appending to respective rows

        //col1 ,col2 ,col3, col4 to row1
        let col1 = document.createElement("div");
        col1.setAttribute("class", "col-3 ");
     
        let col2 = document.createElement("div");
        col2.setAttribute("class", "col-3 ");

        let col3 = document.createElement("div");
        col3.setAttribute("class", "col-3 ");

        let col4 = document.createElement("div");
        col4.setAttribute("class", "col-3 ");

        row1.append(col1, col2, col3, col4);

        //col5 ,col6 ,col7, col8 to row2

        let col5 = document.createElement("div");
        col5.setAttribute("class", "col-3 ");
     
        let col6 = document.createElement("div");
        col6.setAttribute("class", "col-3 ");

        let col7 = document.createElement("div");
        col7.setAttribute("class", "col-3 ");

        let col8 = document.createElement("div");
        col8.setAttribute("class", "col-3 ");

        row2.append(col5, col6, col7, col8);

        //col9 ,col10 ,col11, col12 to row3


        let col9 = document.createElement("div");
        col9.setAttribute("class", "col-3 ");
     
        let col10 = document.createElement("div");
        col10.setAttribute("class", "col-3 ");

        let col11 = document.createElement("div");
        col11.setAttribute("class", "col-3 ");

        let col12 = document.createElement("div");
        col12.setAttribute("class", "col-3");

        row3.append(col9, col10, col11, col12);

        //Retrieving the GIF URLs and diplaying the GIFs in each column

        let gifURL1 = gifArray[0].images.downsized_large.url;
        console.log(gifURL1);
        col1.innerHTML = `<img src= \" ${gifURL1} \" class= \"img-fluid \" >`;
        // gif1.innerHTML = "<iframe src=\"https://giphy.com/embed/cfuL5gqFDreXxkWQ4o\" width=\"fit-content \" height= width=\"fit-content \" frameBorder=\"0\" class=\"giphy-embed\" ></iframe>";
    
        let gifURL2 = gifArray[1].images.downsized.url;
        console.log(gifURL2);
        col2.innerHTML = `<img src= \" ${gifURL2} \" class= \"img-fluid \" >`;

        let gifURL3 = gifArray[2].images.downsized.url;
        console.log(gifURL3);
        col3.innerHTML = `<img src= \" ${gifURL3} \" class= \"img-fluid \" >`;

        let gifURL4 = gifArray[3].images.downsized.url;
        console.log(gifURL4);
        col4.innerHTML = `<img src= \" ${gifURL4} \" class= \"img-fluid \" >`;

        let gifURL5 = gifArray[4].images.downsized.url;
        console.log(gifURL5);
        col5.innerHTML = `<img src= \" ${gifURL5} \" class= \"img-fluid \" >`;

        let gifURL6 = gifArray[5].images.downsized.url;
        console.log(gifURL6);
        col6.innerHTML = `<img src= \" ${gifURL6} \" class= \"img-fluid \" >`;

        let gifURL7 = gifArray[6].images.downsized.url;
        console.log(gifURL7);
        col7.innerHTML = `<img src= \" ${gifURL7} \" class= \"img-fluid \" >`;

        let gifURL8 = gifArray[7].images.downsized.url;
        console.log(gifURL8);
        col8.innerHTML = `<img src= \" ${gifURL8} \" class= \"img-fluid \" >`;

        let gifURL9 = gifArray[8].images.downsized.url;
        console.log(gifURL9);
        col9.innerHTML = `<img src= \" ${gifURL9} \" class= \"img-fluid \" >`;

        let gifURL10 = gifArray[9].images.downsized.url;
        console.log(gifURL10);
        col10.innerHTML = `<img src= \" ${gifURL10} \" class= \"img-fluid \" >`;

        let gifURL11 = gifArray[10].images.downsized.url;
        console.log(gifURL11);
        col11.innerHTML = `<img src= \" ${gifURL11} \" class= \"img-fluid \" >`;

        let gifURL12 = gifArray[11].images.downsized.url;
        console.log(gifURL12);
        col12.innerHTML = `<img src= \" ${gifURL12} \" class= \"img-fluid \" > `;
    }
}


//"http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=YOUR_API_KEY&limit=5");
