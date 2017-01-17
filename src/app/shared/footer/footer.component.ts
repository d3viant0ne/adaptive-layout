import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'adl-footer',
  template: `
    <footer class="adl-footer">
    Powered by Angular. License MIT.
    </footer>
    `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
