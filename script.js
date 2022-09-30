let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];
let allPokemon = [];
let maxPokemon = 30;
let currentPokemon;
let objColors = {
    normal: "#BBBBAD",
    grass: "#48D0B0",
    fire: "#FB6D6C",
    water: "#76BDFD",
    fighting: "#A55744",
    flying: "#7AA4FF",

    poison: "#A95EA1",
    ground: "peru",
    rock: "#CEBC72",
    bug: "#C2D11E",
    ghost: "#7973D5",
    electric: "#FFD86F",

    psychic: "#FE64B3",
    ice: "#95F1FE",
    dragon: "#8C76FF",
    dark: "#8B6653",
    steel: "#C4C2DA",
    fairy: "#FBACFF",
};

// determines the background-color of the given pokemon
function getCardColor(currentPokemon, i) {
    return objColors[currentPokemon.types[0].type.name];
}


async function loadPokemon() {
    document.getElementById('pokemoncard').innerHTML = '';
    for (let i = 1; i < maxPokemon; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
        let response = await fetch(url);
        let currentPokemon = await response.json();
        document.getElementById(`pokemoncard`).innerHTML += `
        <div class="pokemoncard" onclick="showPokemonDetails(${i})">
            <div class="smalcardheader">
                <div class="headername" id="headername${i}"></div>
                <div class="pokemonNumber" id="number${i}"></div>
            </div>
            <div class="element" id="types${i}"></div>
            <img class="pokemonimg" id="pokemonimg${i}" src="">
        </div>
        `;
        allPokemon.push(currentPokemon, i);
        await renderPokemonInfo(currentPokemon, i);
    }
}

async function renderPokemonInfo(currentPokemon, i) {
    document.getElementById('headername' + i).innerHTML = currentPokemon[`name`];
    document.getElementById('number' + i).innerHTML = currentPokemon['id'] + `#`;
    document.getElementById('pokemonimg' + i).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    for (let index = 0; index < currentPokemon['types'].length; index++) {
        document.getElementById('types' + i).innerHTML += `<div class="element ${currentPokemon['types'][index]['type']['name']}">${currentPokemon['types'][index]['type']['name']}</div>`;
    }
}

function loadDetails(currentPokemon, i) {
    document.getElementById('contentcard' + i).innerHTML = '';
    for (let i = 0; i < allPokemon.length; i++) {
        document.getElementById('contentcard' + i).innerHTML += `
        <div class="pokedex" id="pokedex">
        <div class="headerImages">
                <img src="img/arrow.png" class="arrowBack" onclick="removePokemonCard()">
                <img src="img/love.png" class="love" id="like${i}" onclick="likePokemon(${i})">
            </div>
            <h1 id="pokemonName${i}" class="pokemonName">Name</h1>
            <div class="pokemonElementFire">
                <div>
                    <h3 id="pokemonElement${i}">Fire</h3>
                </div>
                <h3 id="pokemonNumber${i}">#004</h3>
            </div>
            <div class="pokemonPicture">
                <img id="pokemonPicture${i}">
            </div>
        </div>
        <div class="info">
            <div class="info_container">
                <h3 class="about margin0 height cursor" onclick="changeToAbout()">About</h3>
                <h3 class="base_stats margin0 height cursor" onclick="changeToBaseStats()">Base Stats</h3>
            </div>
            <div>
                <div class="primary-abilities d-none" id="about${i}">
                    <div class="regular_abilities displayFlex">
                        <span><b>Species:</b></span>
                        <span><b>Height:</b></span>
                        <span><b>Weight:</b></span>
                        <span><b>Abilities:</b></span>
                    </div>
                    <div class="abilities displayFlex">
                        <span id="species${i}">Species</span>
                        <span id="height${i}">Height</span>
                        <span id="weight${i}">Weight</span>
                        <span id="abilities${i}">Abilitie</span>
                    </div>
                </div>
            </div>
            <div>
                <div class="stats" id="base_stats${i}">
                    <div class="statName displayFlex">
                        <Span>HP</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="base_stat"></div>
                        </div>
                        <Span>Attack</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="attack"></div>
                        </div>
                        <Span>Defence</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="defence"></div>
                        </div>
                        <Span>Special-Attack</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="special_attack"></div>
                        </div>
                        <Span>Special-Defence</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="special_defence"></div>
                        </div>
                        <Span>Speed</Span>
                        <div class="progress">
                            <div class="progress-bar progress-bar-striped bg-danger" style="width: 100%" id="speed"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    }
    for (let index = 0; index < currentPokemon['types'].length; index++) {
        document.getElementById('pokemonElement' + i).innerHTML += `<div class="element ${currentPokemon['types'][index]['type']['name']}">${currentPokemon['types'][index]['type']['name']}</div>`;
    }
}


function showPokemonDetails(currentPokemon, i) {
    document.getElementById('contentcard' + i).classList.remove('d-none');
    document.getElementById('pokemonName' + i).innerHTML = currentPokemon[`name`];
    document.getElementById('pokemonNumber' + i).innerHTML = currentPokemon['id'] + `#`;
    document.getElementById('pokemonPicture' + i).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    document.getElementById('species' + i).innerHTML = currentPokemon['game_indices']['height'];
    document.getElementById('height' + i).innerHTML = currentPokemon['height'];
    document.getElementById('weight' + i).innerHTML = currentPokemon['weight'];
    document.getElementById('abilities' + i).innerHTML = currentPokemon['abilities']['1']['ability']['name'];
    document.getElementById('pokemonElement' + i).innerHTML = currentPokemon['types']['0']['type']['name'];
    document.getElementById('pokemonElementTwo' + i).innerHTML = currentPokemon['types']['1']['type']['name'];
    document.getElementById('base_stat' + i).innerHTML = currentPokemon['stats']['0']['base_stat'];
    document.getElementById('attack' + i).innerHTML = currentPokemon['stats']['1']['base_stat'];
    document.getElementById('defence' + i).innerHTML = currentPokemon['stats']['2']['base_stat'];
    document.getElementById('special_attack' + i).innerHTML = currentPokemon['stats']['3']['base_stat'];
    document.getElementById('special_defence' + i).innerHTML = currentPokemon['stats']['4']['base_stat'];
    document.getElementById('speed' + i).innerHTML = currentPokemon['stats']['5']['base_stat'];
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