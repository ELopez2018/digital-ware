import { Component, OnInit } from '@angular/core';
import { PersonalDataModel } from '@models/personal-data.model';
import { UserModel } from '@models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  public users?: PersonalDataModel[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}
