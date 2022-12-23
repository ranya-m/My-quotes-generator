// https://pixabay.com/api/
// https://type.fit/api/quotes
let quote = document.getElementById("quote");
let author = document.querySelector(".author");
let quotesArray = [];
let btnGenerator = document.querySelector(".btn-generator"); 


// New quotes on click
function quoteGenerator() {
    fetch(`https://type.fit/api/quotes`)
    .then((response) => {
        return response.json();
    })
    .then((response) => {
        quotesArray = response;
        let randomQuote = quotesArray[Math.floor(Math.random() * quotesArray.length)];

        quote.textContent = randomQuote.text;  
        author.textContent = randomQuote.author;
    })
    .catch((error) => console.log(error));
}

btnGenerator.addEventListener("click", quoteGenerator);


// New images with the new quotes
let body = document.querySelector("body");
// let images = document.getElementsByTagName("img");


// function getPhotos(){
//     let imageRandom = images[Math.floor(Math.random()*images.length)];
//     console.log(imageRandom);
//     body.style.background = `url("${imageRandom.src}") `
//     body.style.backgroundAttachment = "fixed"
//     body.style.backgroundSize = "100% 100%"
//     body.style.backgroundRepeat ="no-repeat"
// }

btnGenerator.addEventListener("click", getPhotos);




let data;

//******************************************************************************************************************************* */
 // FETCH FOR IMAGES () error at the end : CROSS BLOCK ORIGIN CBO
fetch("https://api.pexels.com/v1/search?query=nature",{
  headers: {
    Authorization: "563492ad6f917000010000011675b4ae264e4fc5a61048ab35b4a564"
  }
})
   .then(resp => {
     return resp.json()
   })
   .then(data => {
     btnGenerator.addEventListener("click",()=>{
        getPhotos(data.photos);
     })
   })

function getPhotos(images){
    let imageRandom = images[Math.floor(Math.random()* images.length)];
    console.log(imageRandom.src.landscape);
    body.style.background = `url("${imageRandom.src.original}")`
    body.style.backgroundAttachment = "fixed"
    body.style.backgroundSize = "100% 100%"
    body.style.backgroundRepeat ="no-repeat"

}

//******************************************************************************************************************************* */

