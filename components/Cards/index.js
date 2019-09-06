// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

axios.get("https://lambda-times-backend.herokuapp.com/articles") //axios call to the api (request)
.then(res => { //then is a method that dictates what to do with the response (res is short for response and is the parameter for the data from the API)
    console.log(res.data.articles) //console.log means show on screen/return in a readable format (res.data.articles is accessing the API response, data is a banana word to access the data from the API, data is a key, articles access the data we need- the array)
    const articles = document.querySelector(".cards-container") //declaring a variable called articles, telling the DOM (document keyword) to "querySelect" or return the first instance of the paramater passed in the function ("".cards-container")
    res.data.articles.bootstrap.forEach(article => { //calling response, then data, then articles data, then requesting data from the array of objects within articles. Uses a forEach to loop through each of the items in the array of articles.bootstrap to return elements created within the createCard function
        articles.appendChild(createCard(article)); //articles is the variable defined above so is being called in here, which is then appeneded (or adds a new node to the parent), appendChild is a method so it requires parameters (createCard, function below) and argument of article (name of arrow function)
    })
    res.data.articles.javascript.forEach(article => {
        articles.appendChild(createCard(article));
    })
    res.data.articles.technology.forEach(article => {
        articles.appendChild(createCard(article));
    })
    res.data.articles.node.forEach(article => {
        articles.appendChild(createCard(article));
    })
    res.data.articles.jquery.forEach(article => {
        articles.appendChild(createCard(article));
    })
})
.catch(err => { //catch will console log if there are any errors in requesting the data from the API
    console.log(err);
})



function createCard(articles) {
    const card = document.createElement("div");
    const headline = document.createElement("div");
    const author = document.createElement("div");
    const image = document.createElement("div");
    const url = document.createElement("img");
    const name = document.createElement("span");

    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(image);
    image.appendChild(url);
    author.appendChild(name);


    card.classList.add("card");
    headline.classList.add("headline");
    author.classList.add("author");
    image.classList.add("img-container");

    headline.textContent = articles.headline;
    name.textContent = articles.authorName;
    url.setAttribute ("src", articles.authorPhoto);

    return card;
}