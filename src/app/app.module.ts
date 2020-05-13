import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';

import { AppRoutingModule } from './app-routing.module';
import { GeneralModule } from 'projects/general/src/app/app.module';
import { GeocodingModule } from 'projects/geocoding/src/app/app.module';
import { DirectionsModule } from 'projects/directions/src/app/app.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    GeneralModule.forRoot(),
    GeocodingModule.forRoot(),
    DirectionsModule.forRoot(),
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
