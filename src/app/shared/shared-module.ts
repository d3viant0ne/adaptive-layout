import { FlexSidenavComponent } from './sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgModule} from '@angular/core';
import {HttpModule} from '@angular/http';
import {MaterialModule} from '@angular/material';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { FlexToolbarComponent } from './toolbar/toolbar.component';
import { FlexContentToolbarComponent } from './content-toolbar/content-toolbar.component';
import { FlexFooterComponent } from './footer/footer.component';


@NgModule({
  imports: [
    HttpModule,
    RouterModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule
  ],
  declarations: [FlexToolbarComponent, FlexSidenavComponent, FlexContentToolbarComponent, FlexFooterComponent],
  exports: [FlexToolbarComponent, FlexSidenavComponent, FlexContentToolbarComponent, FlexFooterComponent],
  providers: [],
  entryComponents: [],
})
export class SharedModule {}
