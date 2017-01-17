import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-content-toolbar',
  template: `
      <md-toolbar class="al-content-toolbar"></md-toolbar>
    `,
  styleUrls: ['./content-toolbar.component.scss']
})
export class ContentToolbarComponent implements OnInit {
  title: string = 'Flex Layout';
  constructor() { }

  ngOnInit() { }
}
