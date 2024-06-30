import { Routes } from '@angular/router';
import {FlatTreeComponent} from "../tree/flat-tree/flat-tree.component";
import {NestedTreeComponent} from "../tree/nested-tree/nested-tree.component";
import {PokemonTreeComponent} from "../tree/pokemon-tree/pokemon-tree.component";

export const routes: Routes = [
  {
    path: 'flat',
    component: FlatTreeComponent
  },
  {
    path: 'nested',
    component: NestedTreeComponent
  },
  {
    path: 'pokemon',
    component: PokemonTreeComponent
  }
];
