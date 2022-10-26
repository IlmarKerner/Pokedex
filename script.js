let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];
let allPokemon = [];
let maxPokemon = 10;
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
        <div class="pokemoncard" onclick="showPokemonDetails(${i})" id="pokemonCard${i}">
            <div class="smalcardheader">
                <div class="headername" id="headername${i}"></div>
                <div class="pokemonNumber" id="number${i}"></div>
            </div>
            <div class="element" id="types${i}"></div>
            <img class="pokemonimg" id="pokemonimg${i}" src="">
        </div>
        `;
        allPokemon.push(currentPokemon);
        await renderPokemonInfo(currentPokemon, i);
        console.log(currentPokemon, i);
    }

}

async function renderPokemonInfo(currentPokemon, i) {
    document.getElementById('headername' + i).innerHTML = currentPokemon[`name`];
    document.getElementById('number' + i).innerHTML = currentPokemon['id'] + `#`;
    document.getElementById('pokemonimg' + i).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];
    for (let j = 0; j < currentPokemon['types'].length; j++) {
        document.getElementById('types' + i).innerHTML += `<div class="element ${currentPokemon['types'][j]['type']['name']}">${currentPokemon['types'][j]['type']['name']}</div>`;
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

function removePokemonCard() {
    document.getElementById('pokemondetail').classList.add('d-none');
}

function showPokemonDetails(i) {

    document.getElementById('pokemondetail').classList.remove('d-none');
    pokemondetail = document.getElementById('pokemondetail');
    pokemondetail.innerHTML = `
    <div class="pokemon_detail_window" id="pokemonDetailWindow${i}">
        <div class="content_card">
            <div class="header_images">
                <img src="img/arrow.png" onclick="removePokemonCard()">
                <img src="img/love.png" id="like" onclick="likePokemon()">
            </div>
            <div class="pokemon_name">
                <h4 id="pokemonName">${allPokemon[i-1]['name']}</h4>
            </div>
            <div class="header_detail">
                <div class="pokemon_element">
                    <h4 id="pokemonElement">${allPokemon[i-1]['types']['0']['type']['name']}</h4>
                </div>
                <div class="pokemon_number">
                    <h4 id="pokemonNumber">#${allPokemon[i-1]['id']}</h4>
                </div>
            </div>
            <div class="pokemon_image">
                <img id="pokemonImage" src="${allPokemon[i-1]['sprites']['other']['official-artwork']['front_default']}">
            </div>
        </div>
        <div class="pokemon_stats_window">
            <div class="info_header">
                <h4 onclick="showAboutInfo()">About</h4>
                <h4 onclick="showBaseStats()">Base Stats</h4>
            </div>
            <div class="about_pokemon" id="aboutPokemon">
                <div class="about">
                    <span>Species:</span>
                    <span>Height:</span>
                    <span>Weight:</span>
                    <span>Abilitie:</span>
                </div>
                <div class="about_abilities">
                    <span id="specie">${allPokemon[i-1]['species']['name']}</span>
                    <span id="height">${allPokemon[i-1]['height']}</span>
                    <span id="weight">${allPokemon[i-1]['weight']}</span>
                    <span id="abilitie">${allPokemon[i-1]['abilities']['1']['ability']['name']}</span>
                </div>
            </div>
            <div class="stats d-none" id="stats">
                <Span>HP</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" id="baseStat">${allPokemon[i-1]['stats']['0']['base_stat']}</div>
                </div>
                <Span>Attack</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" id="attack">${allPokemon[i-1]['stats']['1']['base_stat']}</div>
                </div>
                <Span>Defence</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" id="defence">${allPokemon[i-1]['stats']['2']['base_stat']}</div>
                </div>
                <Span>Special-Attack</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" id="specialAttack">${allPokemon[i-1]['stats']['3']['base_stat']}</div>
                </div>
                <Span>Special-Defence</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger"  id="specialDefence">${allPokemon[i-1]['stats']['4']['base_stat']}</div>
                </div>
                <Span>Speed</Span>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped bg-danger" id="speed">${allPokemon[i-1]['stats']['5']['base_stat']}</div>
                </div>
            </div>
        </div>
    </div>    
`;
    showStatsContent(i)

}

// function renderPokemonType(i) {
//     for (let j = 0; j < allPokemon[i - 1]['pokemonElement'].length; j++) {
//         document.getElementById('pokemonElements' + i).innerHTML += `<div class="element ${allPokemon[i-1]['types'][j]['type']['name']}">${allPokemon[i-1]['types'][j]['type']['name']}</div>`;
//     }
// }

function showBaseStats() {
    document.getElementById('aboutPokemon').classList.add('d-none');
    document.getElementById('stats').classList.remove('d-none');
}

function showAboutInfo() {
    document.getElementById('stats').classList.add('d-none');
    document.getElementById('aboutPokemon').classList.remove('d-none');
}

function showStatsContent(i) {
    showHP(i);
    showAttack(i);
    showDefence(i);
    showSpecialAttack(i);
    showSpecialDefence(i);
    showSpeed(i);
}

function showHP(i) {
    let hp = allPokemon[i - 1]['stats']['0']['base_stat'] / 100;
    hp = Math.round(hp * 100);
    document.getElementById('baseStat').style = `width: ${hp}%`;
}

function showAttack(i) {
    let attack = allPokemon[i - 1]['stats']['1']['base_stat'] / 100;
    attack = Math.round(attack * 100);
    document.getElementById('attack').style = `width: ${attack}%`;
}

function showDefence(i) {
    let defence = allPokemon[i - 1]['stats']['2']['base_stat'] / 100;
    defence = Math.round(defence * 100);
    document.getElementById('defence').style = `width: ${defence}%`;
}

function showSpecialAttack(i) {
    let specialAttack = allPokemon[i - 1]['stats']['3']['base_stat'] / 100;
    specialAttack = Math.round(specialAttack * 100);
    document.getElementById('specialAttack').style = `width: ${specialAttack}%`;
}

function showSpecialDefence(i) {
    let specialDefence = allPokemon[i - 1]['stats']['4']['base_stat'] / 100;
    specialDefence = Math.round(specialDefence * 100);
    document.getElementById('specialDefence').style = `width: ${specialDefence}%`;
}

function showSpeed(i) {
    let speed = allPokemon[i - 1]['stats']['5']['base_stat'] / 100;
    speed = Math.round(speed * 100);
    document.getElementById('speed').style = `width: ${speed}%`;
}

// function filterPokemon(allPokemon, i) {
//     let search = document.getElementById('search').value;
//     search = search.toLowerCase(); //Funktion zur Konventierung der großen Buchstaben in kleine Buchstaben

//     let pokemonList = document.getElementById('pokemoncard');
//     pokemonList.innerHTML = '';

//     for (let i = 0; i < allPokemon.length; i++) {
//         let pokemonName = allPokemon[i];
//         if (pokemonName.toLowerCase().includes(search)) {
//             pokemonList.innerHTML += `
//                 <div class="pokemoncard" onclick="showPokemonDetails(${allPokemon[i]})" id="pokemonCard${allPokemon[i]}">
//                     <div class="smalcardheader">
//                         <div class="headername" id="headername${allPokemon[i]}"></div>
//                         <div class="pokemonNumber" id="number${allPokemon[i]}"></div>
//                     </div>
//                     <div class="element" id="types${allPokemon[i]}"></div>
//                     <img class="pokemonimg" id="pokemonimg${allPokemon[i]}" src="">
//                 </div>`;
//         }
//     }
// }


function filterPokemon() {
    let search = document.getElementById('search').value;
    search = search.toLowerCase();
    let cardContent = document.getElementById('pokemoncard');
    cardContent.innerHTML = '';
    filterByName(search, cardContent);

}


function filterByName(search, cardContent) {
    for (let i = 0; i < allPokemon.length; i++) {
        currentPokemon = allPokemon[i];
        let name = allPokemon[i]['name'];
        if (name.includes(search)) {
            loadPokemon(currentPokemon, i + 1)
        } else {
            // cardContent.classList.add('d-none');
            alert('match not found');
        }
    }
}