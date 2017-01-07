import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { NgModule } from '@angular/core';

import { SharedModule } from './shared/shared-module';
import { FlexLayoutAppComponent } from './flex-layout-app.component';
import { FlexLayoutAppRoutingModule } from './flex-layout-app-routing.module';

@NgModule({
  declarations: [
    FlexLayoutAppComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    SharedModule,
    FlexLayoutAppRoutingModule,
    MaterialModule.forRoot(),
    FlexLayoutModule.forRoot()
  ],
  providers: [],
  bootstrap: [FlexLayoutAppComponent]
})
export class FlexLayoutAppModule { }
