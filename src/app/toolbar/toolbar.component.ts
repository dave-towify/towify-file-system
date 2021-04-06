import { Component, OnInit } from '@angular/core';
import {svgIconFilter, svgIconSort} from '../file.system.type';
import {DomSanitizer} from '@angular/platform-browser';
@Component({
  selector: 'app-panel',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  iconFilter = svgIconFilter;
  iconSort = svgIconSort;
  constructor(
    private readonly sanitizer: DomSanitizer
  ) {
    this.iconFilter.svgHtml = sanitizer.bypassSecurityTrustHtml(this.iconFilter.svgSource);
    this.iconSort.svgHtml = sanitizer.bypassSecurityTrustHtml(this.iconSort.svgSource);
  }

  ngOnInit(): void {
  }

}
