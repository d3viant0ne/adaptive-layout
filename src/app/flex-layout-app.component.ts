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
  private _sidenavSubscription;
  private _sidebarSubscription;
  public isSidenavOpen: boolean = true;
  public isSidebarOpen: boolean = true;
  public sidenavMediaChange;
  public sidebarMediaChange;
  public isDarkTheme = false;
  public showShadow = true;

  constructor( @Inject(MatchMediaObservable) public $sidenavMedia, @Inject(MatchMediaObservable) public $sidebarMedia) {
    this._sidenavSubscription = $sidenavMedia.subscribe((sidenavChange: MediaChange) => {
      this.isSidenavOpen = (sidenavChange.mqAlias !== 'sm' && sidenavChange.mqAlias !== 'xs');
      this.sidenavMediaChange = sidenavChange;
    });
    this._sidebarSubscription = $sidebarMedia.subscribe((sidebarChange: MediaChange) => {
      this.isSidebarOpen = (sidebarChange.mqAlias === 'xl');
      this.sidebarMediaChange = sidebarChange;
    });
  }

  ngOnDestroy() {
    this._sidenavSubscription.unsubscribe();
    this._sidebarSubscription.unsubscribe();
  }

  toggleSideNav() {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  toggleSideBar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

}
