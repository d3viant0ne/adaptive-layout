import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flex-footer',
  template: `
    <footer class="flex-footer">
    Powered by Angular. License MIT.
    </footer>
    `,
  styleUrls: ['./footer.component.scss']
})
export class FlexFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
