import {Component, OnInit, signal} from '@angular/core';
import {TreeOption} from "../flat-tree/flat-tree.component";
import {AsTreeNodePipe} from "../../pipes/as-tree-node.pipe";
import {
  CdkNestedTreeNode,
  CdkTree,
  CdkTreeNodeDef,
  CdkTreeNodeOutlet,
  CdkTreeNodeToggle
} from "@angular/cdk/tree";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";
import {MatTreeNestedDataSource} from "@angular/material/tree";
import {NestedTreeNode} from "../nested-tree/nested-tree.component";
import {DataService, LongData, PokemonDetails, PokemonService} from "../../../pokemonapi";
import {BehaviorSubject, firstValueFrom, Subscription} from "rxjs";
import {SelectionChange} from "@angular/cdk/collections";
import {AsPokemonNodePipe} from "../../pipes/as-pokemon-node.pipe";
import {AsyncPipe, JsonPipe} from "@angular/common";

@Component({
  selector: 'app-pokemon-tree',
  standalone: true,
  imports: [
    AsTreeNodePipe,
    CdkNestedTreeNode,
    CdkTree,
    CdkTreeNodeDef,
    CdkTreeNodeOutlet,
    CdkTreeNodeToggle,
    MatIcon,
    MatIconButton,
    AsPokemonNodePipe,
    JsonPipe,
    AsyncPipe
  ],
  templateUrl: './pokemon-tree.component.html',
  styleUrl: './pokemon-tree.component.scss'
})
export class PokemonTreeComponent implements OnInit {

  // nestedTreeControl: NestedTreeControl<PokemonTreeNode>;
  nestedDataSource: MatTreeNestedDataSource<PokemonTreeNode>;
  childrenAccessor = (node: PokemonTreeNode) => node.children;


  private subscription?: Subscription;

  constructor(private data: PokemonService) {
    // this.nestedTreeControl = new NestedTreeControl<PokemonTreeNode>(x => x.children);
    this.nestedDataSource = new MatTreeNestedDataSource<PokemonTreeNode>();
  }

  async ngOnInit() {
    let rootNodes = await firstValueFrom(this.data.pokemonNamesGet());
    let treeNodes = rootNodes.map(x => new PokemonTreeNode(0, x.name!, PokemonNodeType.PokemonDetailsNode, true));
    // this.subscription = this.nestedTreeControl.expansionModel.changed.subscribe(change => {
    //   if (change.added || change.removed) {
    //     this.handleTreeControl(change);
    //   }
    // });

    this.nestedDataSource.data = [...treeNodes];

  }

  trackBy(_: number, node: PokemonTreeNode) {
    return `${node.level}${node.label}`
  }


  private handleTreeControl(change: SelectionChange<PokemonTreeNode>) {
    if (change.added) {
      change.added.forEach(x => this.toggleNode(x, true));
    }
    if (change.removed) {
      change.removed.slice().reverse().forEach(x => this.toggleNode(x, false));
    }
  }

  indexOf(node: PokemonTreeNode, nodes: Array<PokemonTreeNode> | undefined | null) {
    debugger;
    if (!nodes) {
      return -1;
    }
    return nodes.indexOf(node);
  }

  async loadMore(type: PokemonNodeType, index: number, pokemonName: string, nodeParent: PokemonTreeNode) {
    let result = new Array<string>();
    nodeParent.loading.set(true);
    switch (type) {
      case PokemonNodeType.GamesNode:
        // let values = await firstValueFrom(this.data.pokemonGamesByNameGet(pokemonName, index, 10));
        result.push(...await firstValueFrom(this.data.pokemonGamesByNameGet(pokemonName, index + 1, 10)));
        break;
      case PokemonNodeType.TvShowsNode:
        result.push(...await firstValueFrom(this.data.pokemonTvshowsByNameGet(pokemonName, index + 1, 10)));
        break;
      case PokemonNodeType.BooksNode:
        result.push(...await firstValueFrom(this.data.pokemonBooksByNameGet(pokemonName, index + 1, 10)));
        break;
      case PokemonNodeType.PostersNode:
        result.push(...await firstValueFrom(this.data.pokemonPostersByNameGet(pokemonName, index + 1, 10)));
        break;
    }

    nodeParent.loading.set(false);
    nodeParent.children.next([...nodeParent.children.value, ...result.map(x => new PokemonTreeNode(2, x, PokemonNodeType.PokemonDetailsNode, false))]);
  }

  isLast(node: PokemonTreeNode, nodes: Array<PokemonTreeNode> | undefined | null) {
    if (node.parent?.type == PokemonNodeType.PokemonDetailsNode) {
      return false;
    }
    if (!nodes || !node) {
      return false;
    }
    // debugger;
    return nodes.indexOf(node) == nodes.length - 1;
  }

  private async toggleNode(node: PokemonTreeNode, expand: boolean) {
    // If the node already has children, then don't re-retrieve them. Cached nodes will be displayed instead.
    if (node.children.value.length) return;
    // If expansion has been requested...
    if (expand) {
      // Set the loading indicator true for the node
      node.loading.set(true);
      // Consider the type of node that is being expanded
      switch (node.type) {
        // If it's a details node (the node that has the Pokemon name in it)...
        case PokemonNodeType.PokemonDetailsNode:
          // Retreive the pokemon details from the server
          let data = await firstValueFrom(this.data.pokemonDetailsByNameGet(node.label));
          // Manually construct nodes to display Pokemon information
          let treeNodes = [
            new PokemonTreeNode(1, `Color: ${data.color}`, PokemonNodeType.PokemonDetailsNode, false, node),
            new PokemonTreeNode(1, `Weight: ${data.weight}`, PokemonNodeType.PokemonDetailsNode, false, node),
            new PokemonTreeNode(1, `Height: ${data.height}`, PokemonNodeType.PokemonDetailsNode, false, node),
            new PokemonTreeNode(1, `Type: ${data.type}`, PokemonNodeType.PokemonDetailsNode, false, node),
            new PokemonTreeNode(1, `Category: ${data.category}`, PokemonNodeType.PokemonDetailsNode, false, node),
            // And the expandable nodes
            new PokemonTreeNode(1, `Games`, PokemonNodeType.GamesNode, true, node),
            new PokemonTreeNode(1, 'TV Shows', PokemonNodeType.TvShowsNode, true, node),
            new PokemonTreeNode(1, 'Books', PokemonNodeType.BooksNode, true, node),
            new PokemonTreeNode(1, 'Posters', PokemonNodeType.PostersNode, true, node),
          ];
          // Tell the node children property that new values are available
          node.children.next([...treeNodes]);

          break;
        case PokemonNodeType.GamesNode:
          // If it's a games node that is being expanded, retrieve games for the pokemon and set them as the nodes children
          // ...repeat the same thing for other types of node (Tv Shows/Books/etc.)
          let games = await firstValueFrom(this.data.pokemonGamesByNameGet(node.parent?.label!, 0, 10));
          node.children.next([...games.map(x => new PokemonTreeNode(2, x, PokemonNodeType.InformationalNode, false, node))]);

          break;
        case PokemonNodeType.TvShowsNode:
          let shows = await firstValueFrom(this.data.pokemonTvshowsByNameGet(node.parent?.label!, 0, 10));
          node.children.next([...shows.map(x => new PokemonTreeNode(2, x, PokemonNodeType.InformationalNode, false, node))]);
          break;
        case PokemonNodeType.BooksNode:
          let books = await firstValueFrom(this.data.pokemonBooksByNameGet(node.parent?.label!, 0, 10));
          node.children.next([...books.map(x => new PokemonTreeNode(2, x, PokemonNodeType.InformationalNode, false, node))]);
          break;
        case PokemonNodeType.PostersNode:
          let posters = await firstValueFrom(this.data.pokemonPostersByNameGet(node.parent?.label!, 0, 10));
          node.children.next([...posters.map(x => new PokemonTreeNode(2, x, PokemonNodeType.InformationalNode, false, node))]);
          // debugger;
          break;
        default:
          throw (`Unknown Node type ${node.type}`);
      }
      // Set the loading indicator back to false for the node
      node.loading.set(false);
    }
  }


  protected readonly TreeOption = TreeOption;

  handleNodeExpansion($event: boolean, node: PokemonTreeNode) {
    this.toggleNode(node, $event);
  }
}

export class PokemonTreeNode {

  children = new BehaviorSubject<Array<PokemonTreeNode>>([]);
  loading = signal(false);

  // type:

  constructor(public level: number,
              public label: string,
              public type: PokemonNodeType,
              public expandable: boolean,
              public parent?: PokemonTreeNode,
              public data?: PokemonDetails | string | Array<string>,) {
  }
}

export enum PokemonNodeType {
  PokemonDetailsNode = 'Details',
  InformationalNode = 'Informational',
  GamesNode = 'Games',
  TvShowsNode = 'TVShows',
  BooksNode = 'Books',
  PostersNode = 'Posters',
}
