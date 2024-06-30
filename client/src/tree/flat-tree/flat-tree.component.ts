import {Component, computed, effect, OnInit, signal} from '@angular/core';
import {MatIcon} from "@angular/material/icon";
import {
  CdkTree,
  CdkTreeNode,
  CdkTreeNodeDef,
  CdkTreeNodePadding,
  CdkTreeNodeToggle,
  FlatTreeControl
} from "@angular/cdk/tree";
import {MatIconButton} from "@angular/material/button";
import {BehaviorSubject, firstValueFrom, map, merge, Observable, of} from "rxjs";
import {DataService, LongData} from "../../../pokemonapi";
import {ArrayDataSource, CollectionViewer, DataSource, SelectionChange} from "@angular/cdk/collections";
import {AsTreeNodePipe} from "../../pipes/as-tree-node.pipe";
import {AsyncPipe, JsonPipe} from "@angular/common";

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
    CdkTreeNodeToggle,
    AsTreeNodePipe,
    AsyncPipe,
    JsonPipe
  ],
  templateUrl: './flat-tree.component.html',
  styleUrl: './flat-tree.component.scss'
})
export class FlatTreeComponent implements OnInit {


  loading = signal(true);
  selectedNodes = signal([] as Array<FlatTreeNode>);

  hasChild = (node: FlatTreeNode) => node.expandable();
  treeControl = new FlatTreeControl<FlatTreeNode>(node => node.level, node => node.expandable());
  datasource: FlatTreeDataSource;

  constructor(private dataService: DataService) {
    this.datasource = new FlatTreeDataSource(this.treeControl, dataService);
  }

  data = new BehaviorSubject<Array<string>>([]);

  async ngOnInit() {
    await this.datasource.loadInitialData();
    this.loading.set(false);
  }

  protected readonly TreeOption = TreeOption;

  loadMore(node : FlatTreeNode) {
    this.datasource.loadMore(node);
  }

  toggleNodeSelect(node: FlatTreeNode){
    this.datasource.toggleNodeSelection(node);
    this.selectedNodes.set(this.datasource.dataChange.value.filter(x => x.selected()));
    // let selectedNodes = this.datasource.dataChange.value.filter(x => x.selected());
    // console.log(selectedNodes);
  }

}

export class FlatTreeNode {
  expandable = signal(true);
  loading = signal(false);
  options = signal<Set<TreeOption>>(new Set<TreeOption>())
  selected = signal(false);
  constructor(public level: number, public data: LongData) {
  }
}

class FlatTreeDataSource implements DataSource<FlatTreeNode> {

  // checkedNodes = computed(() => {
  //   // debugger;
  //   return this.dataChange.value.filter(x => x.selected());
  // });

  dataChange = new BehaviorSubject<FlatTreeNode[]>([]);

  constructor(private _treeControl: FlatTreeControl<FlatTreeNode>, private _api: DataService) {
  }

  get data(): FlatTreeNode[] {
    return this.dataChange.value;
  }

  set data(value: FlatTreeNode[]) {
    this._treeControl.dataNodes = value;
    this.dataChange.next(value);
  }

  toggleNodeSelection(node: FlatTreeNode) {
    // debugger;
    node.selected.update(x => !x);
  }

  async loadInitialData() {
    let initialData = await firstValueFrom(this._api.longDataGet(0, 10));
    this.data = [...initialData.map(x => new FlatTreeNode(0, x))]
  }

  connect(collectionViewer: CollectionViewer): Observable<FlatTreeNode[]> {
    this._treeControl.expansionModel.changed.subscribe(change => {
      if (
        (change as SelectionChange<FlatTreeNode>).added ||
        (change as SelectionChange<FlatTreeNode>).removed
      ) {
        this.handleTreeControl(change as SelectionChange<FlatTreeNode>);
      }
    });
    return this.dataChange;
  }

  disconnect(collectionViewer: CollectionViewer): void {

  }

  /** Handle expand/collapse behaviors */
  handleTreeControl(change: SelectionChange<FlatTreeNode>) {
    // debugger;
    if (change.added) {
      change.added.forEach(node => this.toggleNode(node, true));
    }
    if (change.removed) {
      change.removed
        .slice()
        .reverse()
        .forEach(node => this.toggleNode(node, false));
    }
  }

  async loadMore(node: FlatTreeNode){
    node.loading.set(true);
    let moreNodes = await firstValueFrom(this._api.longDataGet(node.data.index, 10));
    let treeNodes = moreNodes.map(x => new FlatTreeNode(node.level, x));
    this.data.splice(this.data.indexOf(node), 1, ...treeNodes);
    this.dataChange.next(this.data);
    node.loading.set(false);
  }

  /**
   * Toggle the node, remove from display list
   */
  async toggleNode(node: FlatTreeNode, expand: boolean) {
    // Retrieve the index of the node that is asking for expansion
    const index = this.data.indexOf(node);
    // Set loading to true (show loading indicator)
    node.loading.set(true);
    // If we are expanding the node...
    if (expand) {
      // Retrieve nodes from API
      let children = await firstValueFrom(this._api.longDataGet(node.data.index, 10));
      // Map them to our TreeNode type
      let nodes = children.map(x => new FlatTreeNode(node.level + 1, x));
      // For the last node in our retrieved list, set the last node option of TreeOption.Last (to show the "Load more..." button)
      nodes[nodes.length - 1].options.update(x => x.add(TreeOption.Last));
      if (!children || index < 0) {
        // If no children, or cannot find the node, no op
        return;
      }
      // Remove existing "last" nodes from existing data
      this.data.forEach(x => x.options.update(y => {
        y.delete(TreeOption.Last);
        return y;
      }))
      // Insert the newly retrieved data at the right index
      this.data.splice(index + 1, 0, ...nodes);
    } else {
      // Otherwise, if the node is being collapsed, work out how many nodes are children and remove them from the array
      let count = 0;
      for (
        let i = index + 1;
        i < this.data.length && this.data[i].level > node.level;
        i++, count++
      ) {
      }
      this.data.splice(index + 1, count);
    }
    // Notify the BehaviourSubject that the data has changed
    this.dataChange.next(this.data);
    // Set the loading flag back to false
    node.loading.set(false);
  }
}

export enum TreeOption {
  Last,
  Highlighted
}
