import {Component, OnInit, signal} from '@angular/core';
import {DataService, LongData} from "../../../pokemonapi";
import {TreeOption} from "../flat-tree/flat-tree.component";
import {BehaviorSubject, firstValueFrom, Subscription} from "rxjs";
import {
  CdkNestedTreeNode,
  CdkTree,
  CdkTreeNodeDef,
  CdkTreeNodeOutlet,
  CdkTreeNodeToggle
} from "@angular/cdk/tree";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {SelectionChange} from "@angular/cdk/collections";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {AsTreeNodePipe} from "../../pipes/as-tree-node.pipe";
import {FormsModule} from "@angular/forms";
import {JsonPipe} from "@angular/common";
import {AsNestedTreeNodePipe} from "../../pipes/as-nested-tree-node.pipe";

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
    MatIconButton,
    AsTreeNodePipe,
    FormsModule,
    JsonPipe,
    AsNestedTreeNodePipe
  ],
  templateUrl: './nested-tree.component.html',
  styleUrl: './nested-tree.component.scss'
})
export class NestedTreeComponent implements OnInit {
  // nestedTreeControl: NestedTreeControl<NestedTreeNode>;
  nestedDataSource: MatTreeNestedDataSource<NestedTreeNode>;

  selectedNodes = signal<Array<NestedTreeNode>>([]);

  private subscription?: Subscription;

  constructor(private data: DataService) {
    // this.nestedTreeControl = new NestedTreeControl<NestedTreeNode>(x => x.children);
    this.nestedDataSource = new MatTreeNestedDataSource<NestedTreeNode>();
  }

  async ngOnInit() {
    let rootNodes = await firstValueFrom(this.data.longDataGet(0, 10));
    this.nestedDataSource.data = rootNodes.map(x => new NestedTreeNode(0, x));
    // this.subscription = this.nestedTreeControl.expansionModel.changed.subscribe(change => {
    //   if (change.added || change.removed) {
    //     this.handleTreeControl(change);
    //   }
    // })
  }

  trackBy(_: number, node: NestedTreeNode){
    return `${node.level}${node.data.index}`
  }

  private async toggleNode(node: NestedTreeNode, expand: boolean) {
    // If the node is asking to be expanded...
    if (expand) {
      // And the node hasn't already had its children loaded...
      if (node.children.value.length == 0) {
        // Set the loading indicator to true
        node.loading.set(true);
        // Retrieve the new nodes from the server
        let children = await firstValueFrom(this.data.longDataGet(node.data.index, 10));
        // Convert them to our NestedTreeNode
        let nodes = children.map((x, index) => new NestedTreeNode(node.level + 1, x, node));
        // Set the last node on the set to have the "last node" property, so the "load more" button is shown
        nodes[nodes.length - 1].options.update(x => x.add(TreeOption.Last));
        // Send the updated nodes into the BehaviourSubject
        node.children.next(nodes);
        // Set the loading indicator to false
        node.loading.set(false);
      }
    }
  }


  // private handleTreeControl(change: SelectionChange<NestedTreeNode>) {
  //   if (change.added) {
  //     change.added.forEach(x => this.toggleNode(x, true));
  //   }
  //   if (change.removed) {
  //     change.removed.slice().reverse().forEach(x => this.toggleNode(x, false));
  //   }
  // }

  protected readonly TreeOption = TreeOption;

  async loadMore(node: NestedTreeNode) {
    // Set the loading indicator to true for the node
    node.loading.set(true);
    // Retrieve the next set of nodes from the server
    let childData = await firstValueFrom(this.data.longDataGet(node.data.index! + 1, 10));
    // Convert them to NestedTreeNode. Set the parent of the new nodes (not this node, this nodes parent)
    debugger;
    let childNodes = childData.map(x => new NestedTreeNode(node.level, x, node.parent));
    // Retrieve the existing children array
    let existingChildren = node.parent?.children.value;
    if (existingChildren) {
      // Remove any "last node" option from existing nodes in this array
      existingChildren.forEach(x => x.options.update(y => {
        y.delete(TreeOption.Last);
        return y;
      }));

      // Build the new array from the old nodes, and the new nodes we just received
      let newChildArray = [...existingChildren, ...childNodes];
      // Set the new data of the parent, and notify the tree that the nodes have updated
      node.parent?.children.next(newChildArray);
    }
    // Set the loading indicator back to false
    node.loading.set(false);
  }

  // updateSelected(node: NestedTreeNode, event: MouseEvent) {
  //   this.selectedNodes.update(x => {
  //     if (event.target['checked']){
  //
  //     }
  //
  //   })
  // }
  childrenAccessor = (dataNode: NestedTreeNode) => dataNode.children;

  handleNodeSelectionChange(node: NestedTreeNode, checked: boolean) {
    if (checked){
      this.selectedNodes.update(x => {
        x.push(node);
        return x;

      });
    }
    else{
      this.selectedNodes.update(x => {
        let nodeIndex = x.indexOf(node);
        x.splice(nodeIndex, 1);
        return x;
      })
    }
  }

  handleNodeExpansion($event: boolean, node : NestedTreeNode) {
    this.toggleNode(node, $event);

  }
}

export class NestedTreeNode {

  children = new BehaviorSubject<Array<NestedTreeNode>>([]);

  expandable = signal(true);
  loading = signal(false);
  options = signal<Set<TreeOption>>(new Set<TreeOption>())
  selected = signal(false);

  constructor(public level: number, public data: LongData, public parent?: NestedTreeNode) {
  }
}
