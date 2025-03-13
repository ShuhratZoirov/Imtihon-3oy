import { movies } from "./movies.js";


const movieList = document.querySelector(".section_list");
const nameInput = document.querySelector("#form_input");
const sortedElement = document.querySelector(".select_two");
const searchBtn = document.querySelector("#button");




function showMovies(arr) {
    movieList.innerHTML = arr.map(movie => `
        <li class="section_item">
            <img src="${movie.ImageURL}" class="item_img">
            <h2 class="item_h2">${movie.Title}</h2>
            <p class="item_p1">
                <span class="p1_span">${movie.imdb_rating}</span>
                <span class="p1_span">${movie.movie_year}</span>
                <span class="p1_span">${movie.runtime}</span>
            </p>
            <p class="item_summary">${movie.Categories}</p>
            <button class="item_btn">More Info</button>
        </li>
    `).join("");
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let filteredArr = pokemons.filter(item =>
        item.name.toLowerCase().includes(nameInput.value.trim().toLowerCase())
    );
    showMovies(filteredArr);
});


function searchMovies() {
    let searchText = nameInput.value.trim().toLowerCase();
    let filteredMovies = movies.filter(movie =>
        movie.Title.toLowerCase().includes(searchText)
    );

    showMovies(filteredMovies);
}


sortedElement.addEventListener("change", (e) => {
    e.preventDefault();
    let sortedMovies = [...movies];

    if (e.target.value === "az") {
        sortedMovies.sort((a, b) => a.title.localeCompare(b.title));
    } else if (e.target.value === "za") {
        sortedMovies.sort((a, b) => b.title.localeCompare(a.title));
    } else if (e.target.value === "rating") {
        sortedMovies.sort((a, b) => b.imdb_rating - a.imdb_rating);
    } else if (e.target.value === "year") {
        sortedMovies.sort((a, b) => b.movie_year - a.movie_year);
    }

    showMovies(sortedMovies);
});


searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    searchMovies();
});

nameInput.addEventListener("input", () => searchMovies());

showMovies(movies);
