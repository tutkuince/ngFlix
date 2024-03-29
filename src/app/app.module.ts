import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HeaderComponent} from "./shared/header/header.component";
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MovieListComponent } from './pages/movie-list/movie-list.component';
import { SliderComponent } from './components/slider/slider.component';
import {HttpClientModule} from "@angular/common/http";
import {MoviesService} from "./services/movies.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { BannerComponent } from './components/banner/banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MovieListComponent,
    SliderComponent,
    BannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
