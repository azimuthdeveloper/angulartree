const express = require('express');
const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const cors = require('cors');


const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  setTimeout(next, 2000);
});

const options = {
  info: {
    title: 'Pokemon Powers API',
    version: '1.0.0',
  },
  baseDir: __dirname,
  filesPattern: './index.js',
  swaggerUIPath: '/swagger',
  // Expose Open API JSON Docs documentation in `apiDocsPath` path.
  exposeApiDocs: true,
  // Open API JSON Docs endpoint.
  apiDocsPath: '/api-docs',
};

expressJSDocSwagger(app)(options);

const pokemonPowers = {
  Pikachu: ['Thunder Shock', 'Quick Attack', 'Iron Tail', 'Electro Ball', 'Volt Tackle'],
  Charizard: ['Flamethrower', 'Fly', 'Dragon Claw', 'Fire Spin', 'Slash'],
  Bulbasaur: ['Vine Whip', 'Razor Leaf', 'Solar Beam', 'Seed Bomb', 'Tackle'],
  Squirtle: ['Water Gun', 'Bubble', 'Tackle', 'Bite', 'Skull Bash'],
  Jigglypuff: ['Sing', 'Pound', 'Double Slap', 'Rest', 'Hyper Voice'],
  Meowth: ['Scratch', 'Bite', 'Pay Day', 'Fury Swipes', 'Night Slash'],
  Psyduck: ['Water Gun', 'Confusion', 'Scratch', 'Zen Headbutt', 'Hydro Pump'],
  Eevee: ['Tackle', 'Quick Attack', 'Bite', 'Swift', 'Take Down'],
  Snorlax: ['Tackle', 'Body Slam', 'Rest', 'Snore', 'Hyper Beam'],
  Gengar: ['Lick', 'Shadow Ball', 'Hypnosis', 'Dream Eater', 'Night Shade'],
};

const pokemonAppearances = {
  Pikachu: {
    color: 'Yellow',
    weight: '6.0 kg',
    height: '0.4 m',
    type: 'Electric',
    category: 'Mouse Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Yellow', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon Legends: Arceus', 'Pokemon GO', 'Super Smash Bros.'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Pokemon: Pikachu in Love', 'I Choose You!', 'Team Rocket Trouble', 'Charizard Go!', 'Pikachu Shocks Back', 'Pikachu\'s Global Adventure'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Pikachu Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Detective Pikachu Poster', 'Pikachu with Ash Poster', 'Pikachu and Eevee Poster', 'Pokemon Generations Poster', 'Pikachu in Space Poster', 'Pikachu and Friends Poster'],
  },
  Charizard: {
    color: 'Orange',
    weight: '90.5 kg',
    height: '1.7 m',
    type: 'Fire/Flying',
    category: 'Flame Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon FireRed', 'Pokemon LeafGreen', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Pokemon: Charizard in Trouble', 'Ash\'s Charizard Challenge', 'Charizard Go!', 'Pokemon: The First Movie', 'Mewtwo Strikes Back', 'Pokemon: Mewtwo Returns'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Charizard Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Mega Charizard X Poster', 'Mega Charizard Y Poster', 'Charizard with Ash Poster', 'Charizard and Friends Poster', 'Pokemon Generations Poster', 'Charizard in Space Poster'],
  },
  Bulbasaur: {
    color: 'Green',
    weight: '6.9 kg',
    height: '0.7 m',
    type: 'Grass/Poison',
    category: 'Seed Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Green', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Pokemon: Bulbasaur\'s Mysterious Garden', 'The Trouble with Bullies', 'Pokemon: I Choose You!', 'Pokemon: Bulbasaur\'s Bad Day', 'The Bulbasaur and the Beautiful Garden', 'Bulbasaur and the Hidden Village'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Bulbasaur Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Bulbasaur with Ash Poster', 'Bulbasaur in the Garden Poster', 'Pokemon Generations Poster', 'Bulbasaur and Friends Poster', 'Bulbasaur in Space Poster', 'Bulbasaur and Pikachu Poster'],
  },
  Squirtle: {
    color: 'Blue',
    weight: '9.0 kg',
    height: '0.5 m',
    type: 'Water',
    category: 'Tiny Turtle Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Green', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Pokemon: The Wacky Watcher', 'Pokemon: The First Movie', 'Pokemon: I Choose You!', 'The Legend of Thunder', 'Pokemon: Ash and the Squirtle Squad', 'Squirtle Saves the Day'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Squirtle Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Squirtle with Ash Poster', 'Squirtle in the Water Poster', 'Pokemon Generations Poster', 'Squirtle and Friends Poster', 'Squirtle in Space Poster', 'Squirtle and Pikachu Poster'],
  },
  Jigglypuff: {
    color: 'Pink',
    weight: '5.5 kg',
    height: '0.5 m',
    type: 'Normal/Fairy',
    category: 'Balloon Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Super Smash Bros.'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Pokemon: Jigglypuff\'s Song', 'Jigglypuff\'s Singing Sensation', 'The Song of Jigglypuff', 'Jigglypuff and the Mystery Zone', 'Jigglypuff and the Sinister Song', 'Jigglypuff\'s Lullaby'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Jigglypuff Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Jigglypuff with Ash Poster', 'Jigglypuff Singing Poster', 'Pokemon Generations Poster', 'Jigglypuff and Friends Poster', 'Jigglypuff in Space Poster', 'Jigglypuff and Pikachu Poster'],
  },
  Meowth: {
    color: 'Yellow',
    weight: '4.2 kg',
    height: '0.4 m',
    type: 'Normal',
    category: 'Scratch Cat Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon GO'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Meowth\'s Party', 'The Meowth and the Mystery', 'Meowth Rules', 'Meowth\'s Big Battle', 'Meowth and the Great Escape', 'Team Rocket to the Rescue'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Meowth Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Meowth with Team Rocket Poster', 'Meowth and Friends Poster', 'Pokemon Generations Poster', 'Meowth in Space Poster', 'Meowth and Pikachu Poster', 'Meowth\'s Mischief Poster'],
  },
  Psyduck: {
    color: 'Yellow',
    weight: '19.6 kg',
    height: '0.8 m',
    type: 'Water',
    category: 'Duck Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon GO'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'The Psyduck and the Pokedex', 'Psyduck\'s Panic', 'Psyduck\'s Love Song', 'Psyduck in Trouble', 'Psyduck\'s Wild Ride', 'Psyduck\'s Psychic Surprise'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Psyduck Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Psyduck with Misty Poster', 'Psyduck in the Water Poster', 'Pokemon Generations Poster', 'Psyduck and Friends Poster', 'Psyduck in Space Poster', 'Psyduck and Pikachu Poster'],
  },
  Eevee: {
    color: 'Brown',
    weight: '6.5 kg',
    height: '0.3 m',
    type: 'Normal',
    category: 'Evolution Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon GO'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Eevee\'s Evolutionary Adventures', 'The Eevee and the Trainer', 'Eevee\'s Great Escape', 'Eevee and Friends', 'The Legend of Eevee', 'Eevee\'s Secret Mission'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Eevee Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Eevee with Pikachu Poster', 'Eevee and Friends Poster', 'Pokemon Generations Poster', 'Eevee in Space Poster', 'Eevee and Ash Poster', 'Eevee\'s Evolutionary Poster'],
  },
  Snorlax: {
    color: 'Black',
    weight: '460.0 kg',
    height: '2.1 m',
    type: 'Normal',
    category: 'Sleeping Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon GO'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Snorlax\'s Hunger', 'The Snorlax and the Trainer', 'Snorlax\'s Lazy Day', 'Snorlax and Friends', 'Snorlax\'s Great Escape', 'The Legend of Snorlax'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Snorlax Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Snorlax with Ash Poster', 'Snorlax Sleeping Poster', 'Pokemon Generations Poster', 'Snorlax and Friends Poster', 'Snorlax in Space Poster', 'Snorlax and Pikachu Poster'],
  },
  Gengar: {
    color: 'Purple',
    weight: '40.5 kg',
    height: '1.5 m',
    type: 'Ghost/Poison',
    category: 'Shadow Pokémon',
    games: ['Pokemon Red', 'Pokemon Blue', 'Pokemon Gold', 'Pokemon Silver', 'Pokemon Crystal', 'Pokemon Ruby', 'Pokemon Sapphire', 'Pokemon Emerald', 'Pokemon Diamond', 'Pokemon Pearl', 'Pokemon Platinum', 'Pokemon Black', 'Pokemon White', 'Pokemon X', 'Pokemon Y', 'Pokemon Sun', 'Pokemon Moon', 'Pokemon Sword', 'Pokemon Shield', 'Pokemon GO'],
    tvShows: ['Pokemon: Indigo League', 'Pokemon: Adventures in the Orange Islands', 'Pokemon: Johto Journeys', 'Pokemon: Johto League Champions', 'Pokemon: Master Quest', 'Pokemon: Advanced', 'Pokemon: Advanced Challenge', 'Pokemon: Advanced Battle', 'Pokemon: Battle Frontier', 'Pokemon: Diamond and Pearl', 'Pokemon: Diamond and Pearl Battle Dimension', 'Pokemon: Diamond and Pearl Galactic Battles', 'Pokemon: Diamond and Pearl Sinnoh League Victors', 'Pokemon: Black and White', 'Pokemon: Black and White Rival Destinies', 'Pokemon: Black and White Adventures in Unova and Beyond', 'Pokemon: XY', 'Pokemon: XY Kalos Quest', 'Pokemon: XYZ', 'Pokemon Journeys'],
    books: ['Pokemon Adventures', 'The Electric Tale of Pikachu', 'Pokemon Junior', 'Pokemon Tales', 'Gengar\'s Haunting', 'The Gengar and the Trainer', 'Gengar\'s Mischief', 'Gengar and Friends', 'Gengar\'s Great Escape', 'The Legend of Gengar'],
    posters: ['Pokemon Red and Blue Poster', 'Pokemon Gengar Evolution Poster', 'Pokemon 25th Anniversary Poster', 'Pokemon Movie Poster', 'Gengar with Ash Poster', 'Gengar in the Dark Poster', 'Pokemon Generations Poster', 'Gengar and Friends Poster', 'Gengar in Space Poster', 'Gengar and Pikachu Poster'],
  }
};

const longData = Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);

/**
 * GET /pokemon-powers
 * @summary Returns a list of Pokemon powers
 * @tags Pokemon
 * @return {array<string>} 200 - success response
 */
app.get('/pokemon-powers', (req, res) => {
  res.json(Object.keys(pokemonPowers));
});

/**
 * GET /pokemon-powers-by-name
 * @summary Returns a list of powers for a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {array<string>} 200 - success response
 * @return {object} 404 - error response
 */
app.get('/pokemon-powers-by-name', (req, res) => {
  const { name } = req.query;
  if (pokemonPowers[name]) {
    res.json(pokemonPowers[name]);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-appearances-by-name
 * @summary Returns a list of games, TV shows, books, and posters for a given Pokemon specified in the query parameter, with support for skip and take commands
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {object} 200 - success response
 * @return {object} 404 - error response
 */
app.get('/pokemon-appearances-by-name', (req, res) => {
  const { name, skip = 0, take = 20 } = req.query;
  if (pokemonAppearances[name]) {
    const appearances = pokemonAppearances[name];
    const allAppearances = [
      ...appearances.games,
      ...appearances.tvShows,
      ...appearances.books,
      ...appearances.posters
    ];
    const result = allAppearances.slice(parseInt(skip), parseInt(skip) + parseInt(take));
    res.json(result);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /long-data
 * @summary Returns a long set of data with support for skip and take commands
 * @tags Data
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<LongDataItem>} 200 - success response
 */
app.get('/long-data', (req, res) => {
  const skip = parseInt(req.query.skip) || 0;
  const take = parseInt(req.query.take) || 10;
  const data = longData.slice(skip, skip + take).map((item, index) => ({ text: item, index: skip + index }));
  res.json(data);
});

/**
 * A LongDataItem
 * @typedef {object} LongDataItem
 * @property {string} text - The text of the item
 * @property {number} index - The index of the item
 */

/**
 * GET /pokemon-powers-by-name
 * @summary Returns a list of powers for a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */

/**
 * An Error
 * @typedef {object} Error
 * @property {string} error - Error message
 */

/**
 * GET /pokemon-appearances-by-name
 * @summary Returns a list of games, TV shows, books, and posters for a given Pokemon specified in the query parameter, with support for skip and take commands
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */

/**
 * GET /pokemon-details-by-name
 * @summary Returns detailed information about a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {PokemonDetails} 200 - success response
 * @return {Error} 404 - error response
 */

/**
 * PokemonDetails
 * @typedef {object} PokemonDetails
 * @property {string} color - The color of the Pokemon
 * @property {string} weight - The weight of the Pokemon
 * @property {string} height - The height of the Pokemon
 * @property {string} type - The type of the Pokemon
 * @property {string} category - The category of the Pokemon
 * @property {array<string>} games - Games the Pokemon has appeared in
 * @property {array<string>} tvShows - TV shows the Pokemon has appeared in
 * @property {array<string>} books - Books the Pokemon has appeared in
 * @property {array<string>} posters - Posters featuring the Pokemon
 */
/**
 * GET /pokemon-details-by-name
 * @summary Returns detailed information about a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {object} 200 - success response
 * @return {object} 404 - error response
 */
app.get('/pokemon-details-by-name', (req, res) => {
  const { name } = req.query;
  if (pokemonAppearances[name]) {
    res.json(pokemonAppearances[name]);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));