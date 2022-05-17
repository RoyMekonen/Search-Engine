// the input from the HTML
let input = document.querySelector(`input`);
// the ul from the HTML
let list = document.querySelector(`ul`);
// the hits veribale 
let hits;

// the event of the input 
input.addEventListener(`keydown`, function (event) {
  // the check if is the Enter 
  if (event.key === "Enter") {
    event.preventDefault();
    // the input value in varible
    let search = input.value;
    // the api from algolia 
    const URL_API_AGOLIA = `http://hn.algolia.com/api/v1/search?query=${search}`;
    // the Json objects 
    fetch(URL_API_AGOLIA)
      .then(function (response) {
        return response.json();
      })
      // the informain from the Json 
      .then(function (data) {
        hits = data.hits;
        // let newHits=[...hits];
        console.log(hits);
        // run on the hits array and append to the list from the HTML information from the API 
        for (let i = 0; i < hits.length; i++) {
          list.innerHTML += `<li class="li list-group-item"><a href=${data.hits[i].url}>${data.hits[i].title}</a></li>`;
        }
      })
  }
});
