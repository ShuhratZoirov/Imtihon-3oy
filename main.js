import movies from "./movies.js"

const movieList = document.querySelector(".movie_list");
const movieName = document.querySelector("#movie_name");
const searchBtn = document.querySelector(".search_btn");
const sortedElement = document.querySelector("#sort");

function showMovie(arr) {
    movieList.innerHTML = arr.map(item =>
        `
        <li class="movie_item">
                        <img src="./images/1200x675mf.jpg.png" alt="" class="movie_img">

                        <h2 class="name">${item.fulltitle}</h2>
                        
                        <div class="info_wrap">
                              <p>${item.imdb_rating}</p>
                              <p>${item.movie_year}</p>
                              <p>${parseInt(item.runtime / 60)} hr ${item.runtime % 60} min</p>
                        </div>

                        <p class="cattegory">
                              Adventure Animation Comedy
                        </p>

                        <button class="info">
                              More info
                        </button>
                  </li>
        `
    ).join("")
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    let filteredArr = movies.filter(item => item.fulltitle.includes(movieName.value.trim()));

    showMovie(filteredArr)
})

movieName.addEventListener("input", (e) => {
    e.preventDefault();

    if(e.target.value == "") {
        showMovie(movies)
    }
})

sortedElement.addEventListener("change", (e) => {
    e.preventDefault();

    if(e.target.value == "az") {
        let newAz = movies.sort((a, b) => a.fulltitle.localeCompare(b.fulltitle))
        showMovie(newAz)
    } else if (e.target.value == "za") {
        let newAz = movies.sort((a, b) => a.fulltitle.localeCompare(b.fulltitle)).reverse()
        showMovie(newAz)
    } else if (e.target.value == "year") {
        let rty = movies.sort((a, b) => a.movie_year - b.movie_year)
        showMovie(rty)
    }
})

showMovie(movies)