import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-toolbar',
  template: `
    <md-toolbar class="flex-toolbar">
      <div fxLayout="row" fxLayoutAlign="start center">
        <button md-icon-button fxHide="false" fxHide.gt-md>
          <md-icon>menu</md-icon>
        </button>
        <img class="angular-logo"
             src="../../../assets/img/toolbar/angular-transparent.svg"
             alt="Angular Flex Layout">
        <span fxHide="false" fxHide.xs>{{title}}</span>
      </div>
      <div fxLayout="row" fxLayoutAlign="end center" class='toolbar-more'>
        <button md-icon-button fxLayoutAlign="end center">
          <md-icon>more</md-icon>
        </button>
      </div>
    </md-toolbar>
    `,
  styleUrls: ['./toolbar.component.scss']
})
export class FlexToolbarComponent implements OnInit {
  title: string = 'Adaptive Layout';
  constructor() { }

  ngOnInit() { }
}
