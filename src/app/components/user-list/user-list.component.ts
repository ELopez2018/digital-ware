import { Component, OnInit } from '@angular/core';
import { PersonalDataModel } from '@models/personal-data.model';
import { UserModel } from '@models/user.model';
import { UtilsService } from '@root/shared/utilities/utils.service';
import { PassengerService } from '@services/passenger.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users?: PersonalDataModel[] = [];
  constructor( public passagenService: PassengerService, public utilService: UtilsService) { }

  ngOnInit(): void {
    this.getData();
  }
 getData(): void {
  this.utilService.loading();
   this.passagenService.searchAllPassenger$().subscribe((resp:any) => {
    this.utilService.loading(false);
    this.users = resp.data;
     console.log(resp)
   })
 }
}
