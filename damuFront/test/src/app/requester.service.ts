import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthToken} from './models';
@Injectable({
  providedIn: 'root'
})
export class RequesterService {
  BASE_URL = 'http://127.0.0.1:8000';
  constructor(private http: HttpClient) { }
  login(email: string, password: string): Observable<AuthToken>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/auth/login/`, {
      username: email,
      password
    });
  }
  register(email: string, username: string, password: string, recoveryPassword: string): Observable<any>{
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/auth/register/`, {
      email,
      username,
      password
    });
  }
}
