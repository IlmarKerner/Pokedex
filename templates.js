function loadPokemonDetails(i) {
    return `<div class="pokemon_detail_window" id="pokemonDetailWindow${i}">
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
}

function showPokemonCard(i) {
    return `
    <div class="pokemoncard" onclick="showPokemonDetails(${i})" id="pokemonCard${i}">
        <div class="smalcardheader">
            <div class="headername" id="headername${i}"></div>
            <div class="pokemonNumber" id="number${i}"></div>
        </div>
        <div class="element" id="types${i}"></div>
        <img class="pokemonimg" id="pokemonimg${i}" src="">
    </div>`
}

function showSearchedPokemonCard(allPokemon, i) {
    return `
    <div class="pokemoncard" onclick="showPokemonDetails(${allPokemon[i]})" id="pokemonCard${allPokemon[i]}">
        <div class="smalcardheader">
            <div class="headername" id="Headername${allPokemon[i]}"></div>
            <div class="pokemonNumber" id="Number${allPokemon[i]}"></div>
        </div>
        <div class="element" id="Types${allPokemon[i]}"></div>
        <img class="pokemonimg" id="Pokemonimg${allPokemon[i]}" src="">
    </div>`
}