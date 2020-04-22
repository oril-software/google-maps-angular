import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeocodingMapComponent } from './components/geocoding-map/geocoding-map.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'geocoding'
  },
  {
    path: 'geocoding',
    component: GeocodingMapComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
