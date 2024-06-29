import { Pipe, PipeTransform } from '@angular/core';
import {FlatTreeNode} from "../tree/flat-tree/flat-tree.component";

@Pipe({
  name: 'asTreeNode',
  standalone: true
})
export class AsTreeNodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]) {
    return value as FlatTreeNode;
  }

}
