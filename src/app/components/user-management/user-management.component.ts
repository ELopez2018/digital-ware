import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserFacadeService } from '@facades/auth';
import { UserModel } from '@models/user.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
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
  constructor(
    private fb: FormBuilder,
    private userFacade: AuthFacadeService,
    private passengerService: PassengerService,
    private mesageService: MessageService,
    public utilService: UtilsService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}
  validationsUser(): void {
    this.userFacade
      .getCurrentUser$()
      .subscribe((user: UserModel | null) => (this.user = user));
  }
  createForm(): void {
    this.form = this.fb.group({
      name: new FormControl('nikname'),
      email: new FormControl('email@email1.com', [
        Validators.required,
        Validators.email,
      ]),
      avatar: new FormControl(''),
      password: new FormControl(''),
      din: new FormControl(''),
      pnombre: new FormControl('', Validators.required),
      snombre: new FormControl(''),
      apellidop: new FormControl(''),
      apellidom: new FormControl(''),
      genero: new FormControl(''),
      celular: new FormControl(''),
      telefonos: new FormControl(''),
      pais: new FormControl(''),
      departamento: new FormControl(''),
      ciudad: new FormControl(''),
      barrio: new FormControl(''),
      direccion: new FormControl(''),
      fechanacimiento: new FormControl(''),
    });
  }
  get email() {
    return this.form.get('email');
  }
  get pnombre() {
    return this.form.get('pnombre');
  }
  save(): void {
    this.utilService.loading()
    let value = this.form.value;
    console.log(value);
    this.passengerService.createPassenger$(value).subscribe(
      (resp: any) => {
        this.utilService.loading(false);
        this.mesageService.showCustom(resp.message, null, 'success');
        this.form.reset();
      },
      (error) => {
        this.utilService.loading(false);
        this.mesageService.showCustom(error.error.message, null, 'error');
      }
    );
  }
}
