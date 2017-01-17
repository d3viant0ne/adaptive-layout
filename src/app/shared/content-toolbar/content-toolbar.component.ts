import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adl-content-toolbar',
  template: `
      <md-toolbar class="adl-content-toolbar"></md-toolbar>
    `,
  styleUrls: ['./content-toolbar.component.scss']
})
export class ContentToolbarComponent implements OnInit {
  title: string = 'Flex Layout';
  constructor() { }

  ngOnInit() { }
}
