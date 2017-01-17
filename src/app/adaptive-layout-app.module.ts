import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared-module';
import { AdaptiveLayoutAppComponent } from './adaptive-layout-app.component';
import { AdaptiveLayoutAppRoutingModule } from './adaptive-layout-app-routing.module';
import { DashboardComponent } from './features/dashboard.component';
import { StaticComponent } from './features/static/static.component';
import { ResponsiveComponent } from './features/responsive/responsive.component';

@NgModule({
  declarations: [
    AdaptiveLayoutAppComponent,
    DashboardComponent,
    StaticComponent,
    ResponsiveComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    AdaptiveLayoutAppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot(),
    SharedModule
  ],
  providers: [],
  bootstrap: [AdaptiveLayoutAppComponent]
})
export class AdaptiveLayoutAppModule { }
