import {Component, OnInit, signal} from '@angular/core';
import {DataService, LongDataItem} from "../../../pokemonapi";
import {TreeOption} from "../flat-tree/flat-tree.component";
import {BehaviorSubject, firstValueFrom, Observable, Subscription} from "rxjs";
import {
  CdkNestedTreeNode,
  CdkTree,
  CdkTreeNodeDef,
  CdkTreeNodeOutlet,
  CdkTreeNodeToggle,
  NestedTreeControl
} from "@angular/cdk/tree";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {CollectionViewer, DataSource, SelectionChange} from "@angular/cdk/collections";
import {MatTreeNestedDataSource} from "@angular/material/tree";

@Component({
  selector: 'app-nested-tree',
  standalone: true,
  imports: [
    CdkTree,
    CdkNestedTreeNode,
    CdkNestedTreeNode,
    MatIcon,
    CdkTreeNodeDef,
    CdkTreeNodeToggle,
    CdkTreeNodeOutlet,
    CdkTreeNodeDef,
    MatIconButton,
    MatIconButton
  ],
  templateUrl: './nested-tree.component.html',
  styleUrl: './nested-tree.component.scss'
})
export class NestedTreeComponent implements OnInit {
  nestedTreeControl: NestedTreeControl<NestedTreeNode>;
  nestedDataSource: MatTreeNestedDataSource<NestedTreeNode>;

  private subscription?: Subscription;

  constructor(private data: DataService) {
    this.nestedTreeControl = new NestedTreeControl<NestedTreeNode>(x => x.children);
    this.nestedDataSource = new MatTreeNestedDataSource<NestedTreeNode>();
  }

  async ngOnInit() {
    let rootNodes = await firstValueFrom(this.data.longDataGet(0, 10));
    this.nestedDataSource.data = rootNodes.map(x => new NestedTreeNode(0, x));
    this.subscription = this.nestedTreeControl.expansionModel.changed.subscribe(change => {
      if (change.added || change.removed){
        this.handleTreeControl(change);
      }
    })
        // throw new Error('Method not implemented.');
    }

    private async toggleNode(node: NestedTreeNode, expand: boolean) {
      if (expand){
        if (node.children.value.length == 0){
          node.loading.set(true);
          let children = await firstValueFrom(this.data.longDataGet(node.data.index, 10));
          node.children.next(children.map(x => new NestedTreeNode(node.level + 1, x)));
          node.loading.set(false);
        }
      }
    }


  private handleTreeControl(change: SelectionChange<NestedTreeNode>) {

  }
}

export class NestedTreeNode {

  children = new BehaviorSubject<Array<NestedTreeNode>>([]);

  expandable = signal(true);
  loading = signal(false);
  options = signal<Set<TreeOption>>(new Set<TreeOption>())
  selected = signal(false);

  constructor(public level: number, public data: LongDataItem) {
  }
}
