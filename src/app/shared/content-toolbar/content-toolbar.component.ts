import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-content-toolbar',
  template: `
      <md-toolbar class="flex-content-toolbar"></md-toolbar>
    `,
  styleUrls: ['./content-toolbar.component.scss']
})
export class FlexContentToolbarComponent implements OnInit {
  title: string = 'Flex Layout';
  constructor() { }

  ngOnInit() { }
}
