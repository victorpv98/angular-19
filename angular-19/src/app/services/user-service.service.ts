import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http: HttpClient) { }

  urlBase = environment.Api_url + 'comments'

  // Traer datos
  metodoGet(): Observable<string>{
    return this.http.get<string>(this.urlBase);
  }
}
