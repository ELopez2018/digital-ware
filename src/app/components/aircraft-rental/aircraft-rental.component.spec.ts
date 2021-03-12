import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftRentalComponent } from './aircraft-rental.component';

describe('AircraftRentalComponent', () => {
  let component: AircraftRentalComponent;
  let fixture: ComponentFixture<AircraftRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AircraftRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
