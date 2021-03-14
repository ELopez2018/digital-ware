import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AircraftRoutingModule } from './aircraft-routing.module';
import { AircraftComponent } from './aircraft.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AircraftComponent],
  imports: [
    CommonModule,
    AircraftRoutingModule,
     ReactiveFormsModule
  ]
})
export class AircraftModule { }
