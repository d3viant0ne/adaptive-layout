import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-toolbar',
  template: `
      <md-toolbar class="flex-toolbar md-elevation-z6">
        <img class="angular-logo" src="../../../assets/img/toolbar/angular-transparent.svg" alt="Angular Flex Layout">
        {{title}}
      </md-toolbar>
    `,
  styleUrls: ['./toolbar.component.scss']
})
export class FlexToolbarComponent implements OnInit {
  title: string = 'Flex Layout';
  constructor() { }

  ngOnInit() { }
}
