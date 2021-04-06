import { Component, OnInit } from '@angular/core';
import {of} from 'rxjs';
import {NestedTreeControl} from '@angular/cdk/tree';
import {DomSanitizer} from '@angular/platform-browser';
import {svgIconFolderOpen} from '../file.system.type';
import {MatTreeNestedDataSource} from '@angular/material/tree';

interface FoodNode {
  name: string;
  children?: FoodNode[];
}
const TREE_DATA: FoodNode[] = [
  {
    name: 'Vegetables',
    children: [
      {
        name: 'Green',
        children: [
          {name: 'Broccoli'},
          {name: 'Brussels sprouts'},
        ]
      }, {
        name: 'Orange',
        children: [
          {name: 'Pumpkins'},
          {name: 'Carrots'},
        ]
      },
    ]
  },
];

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  treeControl = new NestedTreeControl<FoodNode>(node => node.children);
  dataSource = new MatTreeNestedDataSource<FoodNode>();

  folderOpen = svgIconFolderOpen;
  constructor(
    private readonly sanitizer: DomSanitizer
  ) {
    this.dataSource.data = TREE_DATA;
    this.folderOpen.svgHtml = sanitizer.bypassSecurityTrustHtml(this.folderOpen.svgSource);
  }
  hasChild = (_: number, node: FoodNode) => !!node.children && node.children.length > 0;

  ngOnInit(): void {
  }

}
