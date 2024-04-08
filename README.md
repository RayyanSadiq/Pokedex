![image](https://github.com/RayyanSadiq/Pokedex/assets/113306690/a565df4d-d9f5-428a-917b-4407d8767e3f)
# Pokemon Pokedex

## Overview
This application retrieves information about the first 151 Pokemon from the PokeAPI and displays them in a Pokedex-like interface. Users can click on individual Pokemon to view their details.

## Features
- Displays a list of the first 151 Pokemon.
- Provides basic information about each Pokemon, including their name, types, image, and description.
- Allows users to click on a Pokemon to view detailed information and play its cry sound.

## To-Do List / Upcoming Features
- [ ] Implement search functionality to allow users to search for specific Pokemon by name or type.
- [ ] Add pagination or lazy loading for smoother scrolling through the list of Pokemon.
- [ ] Include additional information about each Pokemon, such as base stats and evolution chain.
- [ ] Improve accessibility features, such as keyboard navigation and screen reader support.
- [ ] Enhance the user interface with animations and transitions for a more interactive experience.

## Implementation Details
- The application is built using HTML, CSS, and JavaScript.
- It utilizes the Fetch API to retrieve data from the PokeAPI.
- Each Pokemon's information is stored in a JavaScript object called `pokedex`.
- The `window.onload` event is used to trigger the initialization process.
- The `getPokemon` function fetches data for each Pokemon and populates the `pokedex` object.
- The `updatePokemon` function updates the UI with detailed information about the selected Pokemon.

## Usage
1. Open the application in a web browser.
2. Wait for the list of Pokemon to load.
3. Click on a Pokemon to view its details.

## Dependencies
- The application requires an internet connection to fetch data from the PokeAPI.
- It uses the Fetch API for making HTTP requests.
- It relies on the PokeAPI for retrieving Pokemon data.

## Credits
- The data is sourced from the PokeAPI (https://pokeapi.co/).
- The application is developed by Rayyan Sadiq.

## Notes
- This application currently supports only the first 151 Pokemon.
- Sound playback may not be supported in all browsers.
