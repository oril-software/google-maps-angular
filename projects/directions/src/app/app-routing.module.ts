import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapDirectionsComponent } from './map-directions/map-directions.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'directions'
  },
  {
    path: 'directions',
    component: MapDirectionsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
