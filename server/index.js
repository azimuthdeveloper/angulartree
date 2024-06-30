const express = require('express');
const bodyParser = require('body-parser');
const expressJSDocSwagger = require('express-jsdoc-swagger');
const cors = require('cors');

const port = 3000;
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

const pokemonDetails = {
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
 * GET /pokemon-details-by-name
 * @summary Returns detailed information about a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {PokemonDetails} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-details-by-name', (req, res) => {
  const { name } = req.query;
  if (pokemonDetails[name]) {
    const details = {
      color: pokemonDetails[name].color,
      weight: pokemonDetails[name].weight,
      height: pokemonDetails[name].height,
      type: pokemonDetails[name].type,
      category: pokemonDetails[name].category,
    };
    res.json(details);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-powers
 * @summary Returns a list of powers for all known Pokemon
 * @tags Pokemon
 * @return {array<PokemonPower>} 200 - success response
 */
app.get('/pokemon-powers', (req, res) => {
  const data = Object.keys(pokemonPowers).map(name => ({ name, powers: pokemonPowers[name] }));
  res.json(data);
});

/**
 * GET /pokemon-powers-by-name
 * @summary Returns a list of powers for a given Pokemon specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @return {PokemonPower} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-powers-by-name', (req, res) => {
  const { name } = req.query;
  if (pokemonPowers[name]) {
    res.json({ name, powers: pokemonPowers[name] });
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-names
 * @summary Returns a list of names of known Pokemon
 * @tags Pokemon
 * @return {array<PokemonName>} 200 - success response
 */
app.get('/pokemon-names', (req, res) => {
  const names = Object.keys(pokemonPowers).map(name => ({ name }));
  res.json(names);
});


/**
 * GET /pokemon-games-by-name
 * @summary Returns a list of games a given Pokemon has appeared in, specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-games-by-name', (req, res) => {
  const { name, skip = 0, take = 10 } = req.query;
  if (pokemonDetails[name]) {
    const data = pokemonDetails[name].games.slice(skip, skip + take);
    res.json(data);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-tvshows-by-name
 * @summary Returns a list of TV shows a given Pokemon has appeared in, specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-tvshows-by-name', (req, res) => {
  const { name, skip = 0, take = 10 } = req.query;
  if (pokemonDetails[name]) {
    const data = pokemonDetails[name].tvShows.slice(skip, skip + take);
    res.json(data);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-books-by-name
 * @summary Returns a list of books a given Pokemon has appeared in, specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-books-by-name', (req, res) => {
  const { name, skip = 0, take = 10 } = req.query;
  if (pokemonDetails[name]) {
    const data = pokemonDetails[name].books.slice(skip, skip + take);
    res.json(data);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /pokemon-posters-by-name
 * @summary Returns a list of posters a given Pokemon has appeared in, specified in the query parameter
 * @tags Pokemon
 * @param {string} name.query.required - Pokemon name
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<string>} 200 - success response
 * @return {Error} 404 - error response
 */
app.get('/pokemon-posters-by-name', (req, res) => {
  const { name, skip = 0, take = 10 } = req.query;
  if (pokemonDetails[name]) {
    const data = pokemonDetails[name].posters.slice(skip, skip + take);
    res.json(data);
  } else {
    res.status(404).json({ error: 'Pokemon not found' });
  }
});

/**
 * GET /long-data
 * @summary Returns a long list of data items with skip and take functionality
 * @tags Data
 * @param {integer} skip.query - Number of items to skip
 * @param {integer} take.query - Number of items to take
 * @return {array<LongData>} 200 - success response
 */
app.get('/long-data', (req, res) => {
  const { skip = 0, take = 10 } = req.query;
  const data = longData.slice(skip, skip + take).map((item, index) => ({ index: skip + index, item }));
  setTimeout(() => res.json(data), 2000);
});

/**
 * PokemonPower
 * @typedef {object} PokemonPower
 * @property {string} name - The name of the Pokemon
 * @property {array<string>} powers - The powers of the Pokemon
 */

/**
 * PokemonName
 * @typedef {object} PokemonName
 * @property {string} name - The name of the Pokemon
 */

/**
 * PokemonColor
 * @typedef {object} PokemonColor
 * @property {string} color - The color of the Pokemon
 */

/**
 * PokemonWeight
 * @typedef {object} PokemonWeight
 * @property {string} weight - The weight of the Pokemon
 */

/**
 * PokemonHeight
 * @typedef {object} PokemonHeight
 * @property {string} height - The height of the Pokemon
 */

/**
 * PokemonType
 * @typedef {object} PokemonType
 * @property {string} type - The type of the Pokemon
 */

/**
 * PokemonDetails
 * @typedef {object} PokemonDetails
 * @property {string} color - The color of the Pokemon
 * @property {string} weight - The weight of the Pokemon
 * @property {string} height - The height of the Pokemon
 * @property {string} type - The type of the Pokemon
 * @property {string} category - The category of the Pokemon
 */


/**
 * PokemonGame
 * @typedef {object} PokemonGame
 * @property {string} game - The name of the game
 */

/**
 * PokemonTVShow
 * @typedef {object} PokemonTVShow
 * @property {string} tvShow - The name of the TV show
 */

/**
 * PokemonBook
 * @typedef {object} PokemonBook
 * @property {string} book - The name of the book
 */

/**
 * PokemonPoster
 * @typedef {object} PokemonPoster
 * @property {string} poster - The name of the poster
 */

/**
 * LongData
 * @typedef {object} LongData
 * @property {integer} index - The index of the data item
 * @property {string} item - The data item
 */

app.listen(port, () => {
  console.log(`Pokemon API listening at http://localhost:${port}`);
});