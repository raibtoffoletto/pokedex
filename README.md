# Pokédex

Simple Pokédex SPA built with React on top of the [PokeAPI.co](https://pokeapi.co). Consists of a pokémon list, detail page for each pokémon and a favorite list.

This project is part of a `Code Challenge` for [TEKEVER](https://tekever.com/)

## Dependencies

- NodeJS (16+)
- Yarn
- Git

## Cloning & Running

```bash
# Clone this repo:
git clone https://github.com/raibtoffoletto/pokedex.git

# Install dependencies
cd pokedex
yarn install

# Run develop mode
yarn dev

# Run compiled version
yarn preview
```

## Technical Description

- Implements a list of all pokémons with pagination (infinite scroll) throw cards showing the ID, name and image for each one.

- When user clicks on a pokémon card it navigates to a pokémon specific page containing the details of that pokémon, with the image, name and information like stats, weight, height etc...

- Pokémons can be saved as favorites from the main list and details page. The favorite list is saved to the device's `localStorage` for persistence. The favorite page can be accessed from the top bar button, visible in any route.

## Tech Stack

- `Typescript` as language superset to be compiled.
- `React` as the javascript reactive framework.
- `React Router` as page router.
- `Material-UI` as basic UI components/Design system.
- `Vite` as bundler and development/preview server.

## TODO List:

- Better layout and component refactoring for the Pokémon details page.

- Implement browser's cache, SWR or other data-fetching method for better caching the pokemon list and details information locally.

- Implement UI tests for the components using a mock context to control outputs.

- Implemente hooks tests with a mock api and components to test the context provider outputs.
