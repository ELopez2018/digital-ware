import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AircraftRentalComponent } from './aircraft-rental.component';

const routes: Routes = [{ path: '', component: AircraftRentalComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AircraftRentalRoutingModule { }
