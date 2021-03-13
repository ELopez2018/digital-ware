import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserFacadeService } from '@facades/auth';
import { UserModel } from '@models/user.model';
import { MessageService } from '@services/message.service';
import { PassengerService } from '@services/passenger.service';
import { AuthFacadeService } from '../login/auth.facade.service';

@Component({
  selector: 'app-user-management',
  templateUrl: './user-management.component.html',
  styleUrls: ['./user-management.component.scss'],
})
export class UserManagementComponent implements OnInit {
  public form!: FormGroup;
  public user?: UserModel | null;
  constructor(private fb: FormBuilder, private userFacade: AuthFacadeService, private passengerService: PassengerService, private mesageService: MessageService) {
    this.createForm();
  }

  ngOnInit(): void {

  }
  validationsUser(): void {
    this.userFacade.getCurrentUser$().subscribe((user: UserModel | null) => this.user = user );
  }
  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl('nikname'),
      email: new FormControl('email@email.com', [Validators.required, Validators.email]),
      avatar: new FormControl(''),
      din: new FormControl('1234567890'),
      pnombre: new FormControl('estarlin', Validators.required),
      snombre: new FormControl('enrique'),
      apellidop: new FormControl('lopez'),
      apellidom: new FormControl('valero'),
      genero: new FormControl('Masculino'),
      celular: new FormControl('3204454846'),
      telefono: new FormControl('3204454846'),
      pais: new FormControl('Venezuela'),
      departamento: new FormControl('Trujillo'),
      ciudad: new FormControl('Chejende'),
      barrio: new FormControl('El turiamo'),
      direccion: new FormControl(' casa 1'),
      fechanacimiento: new FormControl('1977-12-08'),
      role_id: new FormControl(0),
    });
  }
  get email() {return this.form.get('email');}
  get pnombre() {return this.form.get('pnombre');}
  save(): void {
    let value = this.form.value;
    console.log(value)
    this.passengerService.createPassenger$(value).subscribe(resp => {
      console.log(resp)
    },error => {
       console.log('error', error)
       this.mesageService.showCustom(error.error.message, null, "error");
    })
  }
}
