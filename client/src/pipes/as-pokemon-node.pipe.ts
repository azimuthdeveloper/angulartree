import { Pipe, PipeTransform } from '@angular/core';
import {PokemonTreeNode} from "../tree/pokemon-tree/pokemon-tree.component";

@Pipe({
  name: 'asPokemonNode',
  standalone: true
})
export class AsPokemonNodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    return value as PokemonTreeNode;
  }
}
