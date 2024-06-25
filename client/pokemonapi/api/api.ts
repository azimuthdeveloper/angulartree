export * from './data.service';
import { DataService } from './data.service';
export * from './pokemon.service';
import { PokemonService } from './pokemon.service';
export const APIS = [DataService, PokemonService];
