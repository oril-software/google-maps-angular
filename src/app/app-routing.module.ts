import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralModule } from 'projects/general/src/app/app.module';
import { GeocodingModule } from 'projects/geocoding/src/app/app.module';
import { DirectionsModule } from 'projects/directions/src/app/app.module';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'general'
  },
  {
    path: 'general',
    loadChildren: 'projects/general/src/app/app.module#GeneralModule'
  },
  {
    path: 'geocoding',
    loadChildren: 'projects/geocoding/src/app/app.module#GeocodingModule'
  },
  {
    path: 'directions',
    loadChildren: 'projects/directions/src/app/app.module#DirectionsModule'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GeocodingModule.forRoot(),
    GeneralModule.forRoot(),
    DirectionsModule.forRoot(),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
