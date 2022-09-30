let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];
let allPokemon = [];
let MaxPokemon = 20;
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
    for (let i = 1; i < MaxPokemon; i++) {
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
        console.log(allPokemon);
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

// function checkElements(currentPokemon) {
//     let elementTwo = document.getElementById('elementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
//     let pokemonElementTwo = document.getElementById('pokemonElementTwo').innerHTML = currentPokemon['types']['1']['type']['name'];
//     if (elementTwo = true) {
//         elementTwo;
//         pokemonElementTwo;
//     } else {
//         elementTwo.style = "display: none;";
//         pokemonElementTwo.style = "display: none;";
//     }
// }

function showPokemonDetails(currentPokemon, i) {
    document.getElementById('contentcard').classList.remove('d-none');
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



// async function loadPokemon() {
//     document.getElementById('pokemoncard').innerHTML = '';
//     for (let i = 1; i < MaxPokemon; i++) {
//         let url = `https://pokeapi.co/api/v2/pokemon/${i}`;
//         let response = await fetch(url);      
//         let currentPokemon = await response.json();
//         document.getElementById(`pokemoncard`).innerHTML += `
//         <div class="pokemoncard" onclick="showPokemonDetails(${i})">
//             <div class="smalcardheader">
//                 <div class="headername" id="headername${i}"></div>
//                 <div class="pokemonNumber" id="number${i}"></div>
//             </div>
//             <div id="types${i}">

//             </div>
//             <img class="pokemonimg" id="pokemonimg${i}" src="">
//         </div>
//         `;
//         allPokemon.push(currentPokemon, i);
//         await renderPokemonInfo(currentPokemon, i);
//         console.log(allPokemon);
//     }
// }

// async function renderPokemonInfo(currentPokemon, i) {
//     document.getElementById('headername' + i).innerHTML = currentPokemon[`name`];
//     document.getElementById('number' + i).innerHTML = currentPokemon['id'] + `#`;
//     document.getElementById('pokemonimg' + i).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];

//     for (let index = 0; index < currentPokemon['types'].length; index++) {
//          document.getElementById('types' + i).innerHTML += `<div class="element ${currentPokemon['types'][index]['type']['name']}">${currentPokemon['types'][index]['type']['name']}</div>`;
//     }


// document.getElementById('elementTwo' + i).innerHTML = currentPokemon['types']['1']['type']['name'];
// checkElements(currentPokemon);
// }