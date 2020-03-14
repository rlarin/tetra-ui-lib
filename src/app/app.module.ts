import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {TetraUiLibModule} from 'tetra-ui-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TetraUiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
