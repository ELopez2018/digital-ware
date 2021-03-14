import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '@environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AircraftService {
  access_token: string = '';
  token = '';
  urlApi: string = environment.API_URL;
  // Headers = new HttpHeaders().set('Content-Type', 'application/json');
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

  createAircraft$(Data: any): Observable<any[]> {
    return this.http
      .post<any[]>(this.urlApi + `aircraft`, Data)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  searchAllAircraft$(): Observable<any[]> {
    return this.http.get<any[]>(this.urlApi + `aircraft`).pipe(
      tap((resp) => {
        return resp;
      })
    );
  }
  updateAircraft$(Data: any): Observable<any[]> {
    return this.http
      .put<any[]>(this.urlApi + `aircraft`, Data)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  deleteAircraft$(aircraft: any): Observable<any> {
    return this.http
      .get<any>(this.urlApi + `aircraft/delete/${aircraft.id}`)
      .pipe(
        tap((resp) => {
          return resp;
        })
      );
  }
  searchOneAircraft$(id: any): Observable<any> {
    return this.http.get<any>(this.urlApi + `aircraft/${id}/search`).pipe(
      tap((resp) => {
        return resp;
      })
    );
  }
}
