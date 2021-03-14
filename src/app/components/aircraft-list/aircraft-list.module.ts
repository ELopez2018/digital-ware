import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftListRoutingModule } from './aircraft-list-routing.module';
import { AircraftListComponent } from './aircraft-list.component';


@NgModule({
  declarations: [AircraftListComponent],
  imports: [
    CommonModule,
    AircraftListRoutingModule
  ]
})
export class AircraftListModule { }
