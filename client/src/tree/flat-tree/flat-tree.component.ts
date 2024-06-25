import {Component, OnInit, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {CdkTree, CdkTreeNode, CdkTreeNodeDef, CdkTreeNodePadding, CdkTreeNodeToggle} from "@angular/cdk/tree";
import {MatIconButton} from "@angular/material/button";
import {BehaviorSubject, of} from "rxjs";
import {DataService} from "../../../pokemonapi";
import {ArrayDataSource} from "@angular/cdk/collections";

@Component({
  selector: 'app-flat-tree',
  standalone: true,
  imports: [
    MatIcon,
    CdkTree,
    CdkTreeNode,
    CdkTreeNode,
    CdkTreeNodeDef,
    CdkTreeNodePadding,
    MatIconButton,
    CdkTreeNodeToggle
  ],
  templateUrl: './flat-tree.component.html',
  styleUrl: './flat-tree.component.scss'
})
export class FlatTreeComponent implements OnInit{

  hasChild = (_: number, node: TreeNode) => node.expandable();

  // okay = new ArrayDataSource()

  constructor(private dataService: DataService) {
  }

  data = new BehaviorSubject<Array<string>>([]);

    ngOnInit(): void {
      let data = of([
        new TreeNode(0, "First"),
        new TreeNode(0, "Second"),
        new TreeNode(0, "Third"),
      ])
        // throw new Error('Method not implemented.');
    }



}

class TreeNode {
  // data: string;
  // public data: string;
  expanded = signal(false);
  checked = signal(false);
  expandable = signal(true);

  // level?: number = 0

  constructor(public level: number, public data: string, expanded: boolean = false) {
    this.expanded.set(expanded);
    // this.expandable.set(true);
  }

}
