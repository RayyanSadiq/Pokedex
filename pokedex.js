// Number of Pokemon to fetch
const pokemonCount = 151;

// Object to store Pokemon data
const pokedex = {};

/**
 * Window onload event handler.
 * Fetches Pokemon data and renders the Pokemon list when the window loads.
 */
window.onload = async function() {
    try {
        await fetchPokemonData();
        renderPokemonList();
    } catch (error) {
        console.error('Error loading Pokemon data:', error);
    }
}

/**
 * Fetches data for all Pokemon and populates the pokedex object.
 */
async function fetchPokemonData() {
    const promises = [];

    for (let i = 1; i <= pokemonCount; i++) {
        promises.push(fetchPokemon(i));
    }

    await Promise.all(promises);
}

/**
 * Fetches data for a single Pokemon and populates the pokedex object.
 * @param {number} num - The ID of the Pokemon to fetch.
 */
async function fetchPokemon(num) {
    const url = `https://pokeapi.co/api/v2/pokemon/${num}`;
    const response = await fetch(url);
    const data = await response.json();
    const speciesUrl = data.species.url;

    const speciesResponse = await fetch(speciesUrl);
    const speciesData = await speciesResponse.json();

    pokedex[num] = {
        name: data.name,
        img: data.sprites.front_default,
        types: data.types,
        description: speciesData.flavor_text_entries[2].flavor_text.replace(/\f/g, ''),
        cries: data.cries.latest
    };
}

/**
 * Renders the list of Pokemon in the DOM.
 */
function renderPokemonList() {
    const pokemonList = document.getElementById("pokemon-list");

    for (let i = 1; i <= pokemonCount; i++) {
        const pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = `${i}. ${pokedex[i].name.toUpperCase()}`;
        pokemon.classList.add("pokemon-name");
        pokemon.addEventListener("click", updatePokemon);
        pokemonList.appendChild(pokemon);
    }
}

/**
 * Updates the displayed Pokemon details based on user interaction.
 */
function updatePokemon() {
    const pokemon = pokedex[this.id];

    document.getElementById("pokemon-img").src = pokemon.img;

    const typesDiv = document.getElementById("pokemon-types");
    typesDiv.innerHTML = '';
    pokemon.types.forEach(type => {
        const typeSpan = document.createElement('span');
        typeSpan.innerText = type.type.name.toUpperCase();
        typeSpan.classList.add("type-box");
        typeSpan.classList.add(type.type.name);
        typesDiv.appendChild(typeSpan);
    });

    // Play Pokemon cry sound
    const sound = new Audio(pokemon.cries);
    console.log(pokemon.cries)
    sound.volume = 0.2;
    sound.play();

     // Update description
    document.getElementById("pokemon-description").innerText = pokemon.description;
}
