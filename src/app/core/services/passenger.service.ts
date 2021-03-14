import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { PersonalDataModel } from '@models/personal-data.model';

@Injectable({
  providedIn: 'root',
})
export class PassengerService {
  access_token: string = '';
  token = '';
  urlApi: string = environment.API_URL;
  Headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) {}

  // private httpOptions = {
  //   headers: new HttpHeaders({
  //     'Content-Type': 'application/json',
  //     Authorization: 'Bearer ' + this.token,
  //   }),
  // };

  // public setHttpOption() {
  //   this.httpOptions = {
  //     headers: new HttpHeaders({
  //       'Content-Type': 'application/json',
  //       Authorization: 'Bearer ' + this.token,
  //     }),
  //   };
  // }

  createPassenger$(Data: PersonalDataModel): Observable<PersonalDataModel[]> {
    return this.http
      .post<PersonalDataModel[]>(this.urlApi + `users/fulldata`, Data)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  searchAllPassenger$(
  ): Observable<PersonalDataModel[]> {
    return this.http
      .get<PersonalDataModel[]>(this.urlApi + `users/fulldata`)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  updatePassenger$(Data: PersonalDataModel): Observable<PersonalDataModel[]> {
    return this.http
      .put<PersonalDataModel[]>(this.urlApi + `requestServices`, Data)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  deletePassenger$(Data: PersonalDataModel): Observable<PersonalDataModel[]> {
    return this.http
      .delete<PersonalDataModel[]>(this.urlApi + `requestServices`)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
}
