const pokemonCount = 151;
let pokedex = {};

window.onload = async function() {
    const promises = [];

    for (let i = 1; i <= pokemonCount; i++){
        promises.push(getPokemon(i));
    }

    await Promise.all(promises);

    for (let i = 1; i <= pokemonCount; i++){
        let pokemon = document.createElement("div");
        pokemon.id = i;
        pokemon.innerText = i.toString() + ". " + pokedex[i]["name"].toUpperCase();
        pokemon.classList.add("pokemon-name")
        pokemon.addEventListener("click", updatePokemon)
        document.getElementById("pokemon-list").append(pokemon)
    }
}

async function getPokemon(num) {
    let url = "https://pokeapi.co/api/v2/pokemon/"+ num.toString();

    let pokemonResource = await fetch(url);
    let pokemon = await pokemonResource.json();
    
    let pokemonName = pokemon["name"];
    let pokemonTypes = pokemon["types"];
    let pokemonImg = pokemon["sprites"]["front_default"];
    let pokemonCry = pokemon["cries"]

    let specieasResource = await fetch(pokemon["species"]["url"]);
    let pokemonSpecieas = await specieasResource.json()

    let pokemonDescription = pokemonSpecieas["flavor_text_entries"][2]["flavor_text"]
    pokemonDescription = pokemonDescription.replace(/\f/g, " ");

    pokedex[num] = {
        "name" : pokemonName, 
        "img" : pokemonImg,
        "types" : pokemonTypes, 
        "description" : pokemonDescription, 
        "cries": pokemonCry
    };
}

function updatePokemon(){
    document.getElementById("pokemon-img").src = pokedex[this.id]["img"];

    typesDiv = document.getElementById("pokemon-types");
    while (typesDiv.firstChild) {
        typesDiv.firstChild.remove();
    }

    let types = pokedex[this.id]["types"];
    for (let i = 0; i < types.length; i++){
        let type = document.createElement('span');
        type.innerText = types[i]['type']["name"].toUpperCase();
        type.classList.add("type-box");
        type.classList.add(types[i]["type"]["name"]) 
        typesDiv.append(type)
    }

    let sound = new Audio(pokedex[this.id]["cries"]["latest"])
    sound.volume = 0.2
    sound.play();

    // update description
    document.getElementById("pokemon-description").innerText = pokedex[this.id]["description"]

}