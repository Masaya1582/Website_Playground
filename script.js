const pokemonList = document.getElementById('pokemon-list');

const data = {
   "pokemon": [
        {
            "id": 1,
            "name": "Bulbasaur",
            "types": ["Grass", "Poison"],
            "description": "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
        },
        {
            "id": 2,
            "name": "Charmander",
            "types": ["Fire"],
            "description": "Obviously prefers hot places. When it rains, steam is said to spout from the tip of its tail.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
        },
        {
            "id": 3,
            "name": "Squirtle",
            "types": ["Water"],
            "description": "After birth, its back swells and hardens into a shell. Powerfully sprays foam from its mouth.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
        },
        {
            "id": 4,
            "name": "Pikachu",
            "types": ["Electric"],
            "description": "When several of these Pokémon gather, their electricity could build and cause lightning storms.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
        },
        {
            "id": 5,
            "name": "Eevee",
            "types": ["Normal"],
            "description": "Its genetic code is irregular. It may mutate if it is exposed to radiation from element Stones.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
        },
        {
            "id": 6,
            "name": "Mew",
            "types": ["Psychic"],
            "description": "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
        },
        {
            "id": 7,
            "name": "Gengar",
            "types": ["Ghost", "Poison"],
            "description": "Under a full moon, this Pokémon likes to mimic the shadows of people and laugh at their fright.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
        },
        {
            "id": 8,
            "name": "Dragonite",
            "types": ["Dragon", "Flying"],
            "description": "This Pokémon is so strong, it can easily hold aloft a child while flying.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
        },
        {
            "id": 9,
            "name": "Mewtwo",
            "types": ["Psychic"],
            "description": "It was created by a scientist after years of horrific gene-splicing and DNA-engineering experiments.",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
        },
        {
            "id": 10,
            "name": "Sylveon",
            "types": ["Fairy"],
            "description": "It sends a soothing",
            "image_url": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png"
        }
    ]
};

data.pokemon.forEach(pokemon => {
  const card = document.createElement('div');
  card.className = 'pokemon-card';

  const image = document.createElement('img');
  image.className = 'pokemon-image';
  image.src = pokemon.image_url;
  image.alt = `${pokemon.name} Image`;

  const details = document.createElement('div');
  details.className = 'pokemon-details';

  const name = document.createElement('div');
  name.className = 'pokemon-name';
  name.textContent = pokemon.name;

  const types = document.createElement('div');
  types.className = 'pokemon-types';
  types.textContent = `Types: ${pokemon.types.join(', ')}`;

  const description = document.createElement('div');
  description.className = 'pokemon-description';
  description.textContent = pokemon.description;

  details.appendChild(name);
  details.appendChild(types);
  details.appendChild(description);

  card.appendChild(image);
  card.appendChild(details);

  pokemonList.appendChild(card);
});
