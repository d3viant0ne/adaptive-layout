import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared-module';
import { FlexLayoutAppComponent } from './flex-layout-app.component';
import { FlexLayoutAppRoutingModule } from './flex-layout-app-routing.module';
import { DashboardComponent } from './features/dashboard.component';
import { StaticComponent } from './features/static/static.component';
import { ResponsiveComponent } from './features/responsive/responsive.component';

@NgModule({
  declarations: [
    FlexLayoutAppComponent,
    DashboardComponent,
    StaticComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    FlexLayoutAppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [FlexLayoutAppComponent]
})
export class FlexLayoutAppModule { }
