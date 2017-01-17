import { MatchMediaObservable, MediaChange } from '@angular/flex-layout';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'adl-sidenav',
  template: `
    <div class="sidenav-title">

    </div>
    `,
  styleUrls: ['./sidenav.component.scss']
})

export class SidenavComponent {

}
