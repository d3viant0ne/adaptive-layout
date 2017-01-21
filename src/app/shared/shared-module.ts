import { AdaptiveLayoutService } from './services/adaptive-layout/adaptive-layout.service';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { FlexToolbarComponent } from './toolbar/toolbar.component';
import { ContentToolbarComponent } from './content-toolbar/content-toolbar.component';
import { ContentToolbarService } from './content-toolbar/content-toolbar.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarService } from './sidebar/sidebar.service';
import { SidenavComponent } from './sidenav/sidenav.component';
import { SidenavService } from './sidenav/sidenav.service';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [
    FlexToolbarComponent,
    SidenavComponent,
    SidebarComponent,
    ContentToolbarComponent,
    FooterComponent
    ],
  exports: [
    FlexToolbarComponent,
    SidenavComponent,
    SidebarComponent,
    ContentToolbarComponent,
    FooterComponent
    ],
  providers: [
    SidenavService,
    SidebarService,
    ContentToolbarService,
    AdaptiveLayoutService
    ]
})
export class SharedModule { }
