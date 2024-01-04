import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./shared/header/header.component";
import { TestcomponentComponent } from './shared/testcomponent/testcomponent.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TestcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
