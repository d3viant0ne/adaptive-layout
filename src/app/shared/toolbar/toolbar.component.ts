import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-toolbar',
  template: `
    <md-toolbar class="flex-toolbar">
      <div fxLayout="row" fxLayoutAlign="start center">
        <button md-icon-button fxHide="false" fxHide.gt-sm>
          <md-icon>menu</md-icon>
        </button>
        <img class="angular-logo"
             src="../../../assets/img/toolbar/angular-transparent.svg"
             alt="Angular Flex Layout">
        {{title}}
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
