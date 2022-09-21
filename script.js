let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];

let currentPokemon;


async function loadPokemon() {
    let url = 'https://pokeapi.co/api/v2/pokemon/charmander';
    let response = await fetch(url);
    let currentPokemon = await response.json();
    console.log(currentPokemon);
    renderPokemonInfo(currentPokemon);
}

function renderPokemonInfo(currentPokemon) {
    document.getElementById('pokemonName').innerHTML = currentPokemon['name'];
    document.getElementById('pokemonPicture').src = currentPokemon['sprites']['front_shiny'];
}

function likePokemon() {
    let like = document.getElementById('like');
    if (!like.isliked) {
        like.src = likehearth;
        like.isliked == true;
    } else {
        like.src = dislikehearth;
        like.isliked == false;
    }
}