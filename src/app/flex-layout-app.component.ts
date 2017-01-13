import { MatchMediaObservable, MediaChange } from '@angular/flex-layout';
import { Component, ViewEncapsulation, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'flex-layout-app',
  templateUrl: './flex-layout-app.component.html',
  styleUrls: ['./flex-layout-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FlexLayoutAppComponent {
  private _subscription;
  public isOpen = true;
  public mediaChange;
  public isDarkTheme = false;
  public showShadow = true;

  constructor( @Inject(MatchMediaObservable) public $media) {
    this._subscription = $media.subscribe((change: MediaChange) => {
      this.isOpen = (change.mqAlias !== 'sm');
      this.mediaChange = change;
    });
  }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  toggleSideNav() {
    this.isOpen = !this.isOpen;
  }

}
