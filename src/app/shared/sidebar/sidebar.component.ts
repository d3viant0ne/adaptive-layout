import { MatchMediaObservable, MediaChange } from '@angular/flex-layout';
import { Component, OnInit, Inject, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import 'rxjs/add/operator/filter';

@Component({
  selector: 'al-sidbar',
  template: `
    <div class="sidebar-title">

    </div>
    `,
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {

}
