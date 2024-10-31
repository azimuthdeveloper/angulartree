import { Pipe, PipeTransform } from '@angular/core';
import {NestedTreeNode} from "../tree/nested-tree/nested-tree.component";

@Pipe({
  name: 'asNestedTreeNode',
  standalone: true
})
export class AsNestedTreeNodePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): NestedTreeNode {
    return value as NestedTreeNode;
  }

}
