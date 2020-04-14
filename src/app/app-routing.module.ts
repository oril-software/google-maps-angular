import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoogleMapsComponent } from './components/google-maps/google-maps.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'google-maps'
  },
  {
    path: 'google-maps',
    component: GoogleMapsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
