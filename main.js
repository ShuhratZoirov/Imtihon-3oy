import movies from "./movies.js"

const formEl = document.querySelector("#form");
const formInput = document.querySelector("#form_input");
const selectEl = document.querySelector(".select");
const selectElTwo = document.querySelector(".select_two");
const buttonEl = document.querySelector("#button");
const sectionList = document.querySelector(".section_list")

function showProduct(arr) {
    sectionList.innerHTML = arr.map(item => `
                <li class="section_item">
                    <img src="${item.ImageURL}" alt="" class="item_img">

                    <h2 class="item_h2">${item.Title}</h2>

                    <p class="item_p1">
                        <span class="p1_span">${item.imdb_rating}</span>
                        <span class="p1_span">${item.movie_year}</span>
                        <span class="p1_span">${item.runtime}</span>
                    </p>

                    <p class="item_p1_2">${item.Categories}</p>

                    <button class="item_btn">More Info</button>
                </li>
        `).join("")
}

showProduct(movies)