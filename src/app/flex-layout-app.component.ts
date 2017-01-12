import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'flex-layout-app',
  templateUrl: './flex-layout-app.component.html',
  styleUrls: ['./flex-layout-app.component.scss'],
  encapsulation : ViewEncapsulation.None
})
export class FlexLayoutAppComponent {
  isDarkTheme = false;
  showShadow = true;
}
