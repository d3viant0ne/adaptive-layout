import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'al-footer',
  template: `
    <footer class="al-footer">
    Powered by Angular. License MIT.
    </footer>
    `,
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
