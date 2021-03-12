import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRentalRoutingModule } from './aircraft-rental-routing.module';
import { AircraftRentalComponent } from './aircraft-rental.component';


@NgModule({
  declarations: [AircraftRentalComponent],
  imports: [
    CommonModule,
    AircraftRentalRoutingModule
  ]
})
export class AircraftRentalModule { }
