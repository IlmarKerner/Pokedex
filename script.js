let likehearth = ['img/like.png'];
let dislikehearth = ['img/love.png'];
let allPokemon = [];
let maxPokemon = 10;
let currentPokemon;
let currentPokemonColor;
let currentPokemonType;
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
        let firstType = currentPokemon.types[0].type.name;
        currentPokemonColor = `background: ${objColors[firstType]};`;
        document.getElementById(`pokemoncard`).innerHTML += showPokemonCard(i, currentPokemonColor);
        pokemonBackgroundColor(currentPokemonColor[i]);
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

function pokemonBackgroundColor(currentPokemonColor) {
    if (currentPokemonType == 'grass') {
        return currentPokemonColor = 'background-color: #48D0B0;'
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
    pokemondetail.innerHTML = loadPokemonDetails(i, currentPokemonColor);
    showStatsContent(i);

}

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

function backgroundColorDetail() {
    let pokemonDetailBackgroundcolor = document.getElementById('pokemonDetailWindow' + i);
    pokemonDetailBackgroundcolor.classList.add(`grass`);
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

function deleteSearch() {
    document.getElementById('pokemoncard').classList.remove('d-none');
    document.getElementById('search').value = '';
    allPokemon = [];
    maxPokemon = 10;
    loadPokemon();
}

function getCardColorFiltered(allPokemon, i) {
    return objColors[allPokemon.types[0].type.name];
}

function getPokemonById(id) {
    return allPokemon.find(p => p.id == id);
}

function filterPokemon(event) {
    let searchString = event.target.value.toLowerCase();
    let filteredPokemon = allPokemon.filter((pokemon) => {
        return (
            pokemon['name'].toLowerCase().includes(searchString)
        );
    });
    displayCharacters(filteredPokemon);
}

function getTypesHTML(allPokemon) {
    let types = allPokemon['types'][0]['type']['name'];
    let html = '';

    for (let p = 0; p < allPokemon['types'].length; p++) {
        html += `<div class="element ${pokemon['types'][j]['type']['name']}">${pokemon['types'][j]['type']['name']}</div>`;
    }
    return html;
}

function displayCharacters(filteredPokemon, pokemon) {
    let htmlString = document.getElementById('pokemoncard');
    htmlString.innerHTML = '';
    htmlString.innerHTML = filteredPokemon.map((pokemon) => {
            return `
            <div class="pokemoncard ${pokemon['types'][0]['type']['name']}"  onclick="showPokemonDetails(${pokemon.id})" id="pokemonCard${getPokemonIndex(pokemon)}">
            <div class="smalcardheader">
                <div class="headername" id="headername${getPokemonIndex(pokemon)}">${allPokemon[getPokemonIndex(pokemon)]['name']}</div>
                <div class="pokemonNumber" id="number${getPokemonIndex(pokemon)}">${allPokemon[getPokemonIndex(pokemon)]['id']}#</div>
            </div>
            <div class="element2 ${pokemon['types'][0]['type']['name']}" id="types${getPokemonIndex(pokemon)}">${allPokemon[getPokemonIndex(pokemon)]['types']['0']['type']['name']}</div>
            <img class="pokemonimg" id="pokemonimg${getPokemonIndex(pokemon)}" src="${allPokemon[getPokemonIndex(pokemon)]['sprites']['other']['official-artwork']['front_default']}">
        </div>
        `;

        })
        .join('');

};

function getPokemonIndex(pokemon) {
    return allPokemon.indexOf(pokemon);
}

// async function renderPokemonInfo(currentPokemon, i) {
//     document.getElementById('headername' + i).innerHTML = currentPokemon[`name`];
//     document.getElementById('number' + i).innerHTML = currentPokemon['id'] + `#`;
//     document.getElementById('pokemonimg' + i).src = currentPokemon['sprites']['other']['official-artwork']['front_default'];

//     for (let j = 0; j < currentPokemon['types'].length; j++) {
//         document.getElementById('types' + i).innerHTML += `<div class="element ${currentPokemon['types'][j]['type']['name']}">${currentPokemon['types'][j]['type']['name']}</div>`;
//     }

// }