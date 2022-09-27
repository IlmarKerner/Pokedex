let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];
let allPokemon = [];
let MaxPokemon = 20;
let currentPokemon;

async function loadPokemon() {
    document.getElementById('pokemoncard').innerHTML = '';
    for (let i = 1; i < MaxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        document.getElementById(`pokemoncard`).innerHTML += `
        <div class="pokemoncard" onclick="showPokemonDetails(${i})">
            <div class="smalcardheader">
                <div class="headername" id="headername">${i}</div>
                <div class="pokemonNumber" id="number">${i}</div>
            </div>
            <div class="element" id="element">${i}</div>
            <div class="elementTwo" id="elementTwo">${i}</div>
            <img class="pokemonimg" id="pokemonimg" src="${i}">
        </div>
        `;
        allPokemon.push(currentPokemon, i);
        await renderPokemonInfo(currentPokemon, i);
        console.log(allPokemon);
    }
}

async function renderPokemonInfo(currentPokemon, i) {
    document.getElementById('pokemonName').innerHTML = currentPokemon[`name`];
    document.getElementById('headername').innerHTML = currentPokemon[`name`];
    document.getElementById('pokemonNumber').innerHTML = currentPokemon['id'] + `#`;
    document.getElementById('number').innerHTML = currentPokemon['id'] + `#`;
    document.getElementById('pokemonPicture').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('pokemonimg').src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('species').innerHTML = currentPokemon['game_indices']['height'];
    document.getElementById('height').innerHTML = currentPokemon['height'];
    document.getElementById('weight').innerHTML = currentPokemon['weight'];
    document.getElementById('abilities').innerHTML = currentPokemon['abilities']['1']['ability']['name'];
    document.getElementById('pokemonElement').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemonElementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
    document.getElementById('element').innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('elementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
    document.getElementById('base_stat').innerHTML = currentPokemon['stats']['0']['base_stat'];
    document.getElementById('attack').innerHTML = currentPokemon['stats']['1']['base_stat'];
    document.getElementById('defence').innerHTML = currentPokemon['stats']['2']['base_stat'];
    document.getElementById('special_attack').innerHTML = currentPokemon['stats']['3']['base_stat'];
    document.getElementById('special_defence').innerHTML = currentPokemon['stats']['4']['base_stat'];
    document.getElementById('speed').innerHTML = currentPokemon['stats']['5']['base_stat'];
    checkElements(currentPokemon);
}

function checkElements(currentPokemon) {
    let elementTwo = document.getElementById('elementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
    let pokemonElementTwo = document.getElementById('pokemonElementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
    if (elementTwo = true) {
        elementTwo;
        pokemonElementTwo;
    } else {
        elementTwo.style = "display: none;";
        pokemonElementTwo.style = "display: none;";
    }
}

function speciesColors(currentPokemon) {
    let speciesColor = document.getElementById('element').innerHTML = currentPokemon['types']['0']['type']['name'];
    if (speciesColor == 'fire') {
        document.getElementById('pokemoncard').style = 'background-color: yellow;';
    }
}

function likePokemon() {
    let like = document.getElementById('like');
    if (!like.isliked) {
        like.src = likehearth[0];
        like.isliked = true;
    } else {
        like.src = dislikehearth[0];
        like.isliked = false;
    }
}

function changeToAbout() {
    document.getElementById('about').classList.remove('d-none');
    document.getElementById('base_stats').classList.add('d-none');
}

function changeToBaseStats() {
    document.getElementById('about').classList.add('d-none');
    document.getElementById('base_stats').classList.remove('d-none');
}

function removePokemonCard() {
    document.getElementById('contentcard').classList.add('d-none');
}

function showPokemonDetails() {
    document.getElementById('contentcard').classList.remove('d-none');
}