import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { MenuOverviewComponent } from './menu-overview/menu-overview.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, MenuOverviewComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
