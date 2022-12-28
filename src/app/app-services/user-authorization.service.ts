import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from '../web-api.service';

@Injectable({
  providedIn: 'root'
})
export class UserAuthorizationService extends WebApiService{

  constructor(protected http: HttpClient) {
    super(http)
  }


  getAppConfigData(apiURL:string, httpParams?: HttpParams): Observable<any[]> {
    return this.baseHttpGetRequest(apiURL, httpParams)
  }
}
