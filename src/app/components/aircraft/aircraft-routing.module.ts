import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftComponent } from './aircraft.component';

const routes: Routes = [{ path: '', component: AircraftComponent },
{ path: ':id', component: AircraftComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AircraftRoutingModule { }
