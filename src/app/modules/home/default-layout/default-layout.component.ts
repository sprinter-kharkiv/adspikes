import { Component, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent implements OnInit {

  filtersExpanded = false;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  toggleFilters():void {
    if (this.filtersExpanded) {
      this.filtersExpanded = false;
      this.renderer.removeClass(document.body, 'filters-expanded');
    } else {
      this.filtersExpanded = true;
      this.renderer.addClass(document.body, 'filters-expanded');
    }
  }

}
