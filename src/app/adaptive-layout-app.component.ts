import { MatchMediaObservable, MediaChange } from '@angular/flex-layout';
import { Component, ViewEncapsulation, OnInit, Inject, OnDestroy, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs/Rx';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'adaptive-layout-app',
  templateUrl: './adaptive-layout-app.component.html',
  styleUrls: ['./adaptive-layout-app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AdaptiveLayoutAppComponent implements OnDestroy, AfterViewInit {
  private _sidenavSubscription;
  private _sidebarSubscription;
  public isSidenavOpen = true;
  public isSidebarOpen = false;
  public sidenavMediaChange;
  public sidebarMediaChange;
  public isDarkTheme = false;
  public showShadow = true;

  // TODO: @d3viant0ne - Get this into services ( need to fix md-toolbar trapping first )
  constructor( @Inject(MatchMediaObservable) public $sidenavMedia, @Inject(MatchMediaObservable) public $sidebarMedia) {
    this._sidenavSubscription = this.$sidenavMedia.subscribe((sidenavChange: MediaChange) => {
      this.isSidenavOpen = (sidenavChange.mqAlias !== 'md' && sidenavChange.mqAlias !== 'sm' && sidenavChange.mqAlias !== 'xs');
      this.sidenavMediaChange = sidenavChange;
    });
  }

  ngAfterViewInit() {
    this._sidebarSubscription = this.$sidebarMedia.subscribe((sidebarChange: MediaChange) => {
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
