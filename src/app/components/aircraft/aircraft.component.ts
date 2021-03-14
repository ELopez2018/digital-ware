import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { AircraftService } from '@services/aircraft.service';
import { MessageService } from '@services/message.service';

@Component({
  selector: 'app-aircraft',
  templateUrl: './aircraft.component.html',
  styleUrls: ['./aircraft.component.scss'],
})
export class AircraftComponent implements OnInit {
  public form!: FormGroup;
  public idAircraft!: string | null;
  constructor(
    private fb: FormBuilder,
    private aircraftService: AircraftService,
    private utilService: UtilsService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.createForm();
    this.idAircraft = this.route.snapshot.paramMap.get('id');
    this.getStarted();
  }
  getStarted() {
    if (this.idAircraft) {
      this.utilService.loading();
      this.aircraftService.searchOneAircraft$(this.idAircraft).subscribe(
        (resp) => {
          this.utilService.loading(false);
          this.form.reset(resp.data);
        },
        (error) => {
          this.utilService.loading(false);
          console.log(error);
          this.messageService.showCustom(error.error.message, null, 'error');
        }
      );
    }
  }
  createForm(): void {
    this.form = this.fb.group({
      id: new FormControl(null, Validators.required),
      descripcion: new FormControl('', Validators.required),
      capacidad: new FormControl(null),
      destino: new FormControl(''),
      puestos_ocupados: new FormControl(null),
    });
  }
  save() {
    if(this.idAircraft) {
      this.utilService.loading();
      const values = this.form.value;
      console.log(values)
      this.aircraftService.updateAircraft$(values).subscribe(
        (resp: any) => {
          this.utilService.loading(false);
          console.log(resp);
          this.messageService.showCustom(resp.message, null, 'success');
        },
        (error) => {
          this.utilService.loading(false);
          console.log(error);
          this.messageService.showCustom(error.error.message, null, 'error');
        }
      );
    } else {
      this.utilService.loading();
      const values = this.form.value;
      this.aircraftService.createAircraft$(values).subscribe(
        (resp: any) => {
          this.utilService.loading(false);
          console.log(resp);
          this.messageService.showCustom(resp.message, null, 'success');
        },
        (error) => {
          this.utilService.loading(false);
          console.log(error);
          this.messageService.showCustom(error.error.message, null, 'error');
        }
      );
    }

  }
}
