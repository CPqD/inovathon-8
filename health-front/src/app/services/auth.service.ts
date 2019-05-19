import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CanActivate } from '@angular/router';
import { BASE_URL } from '../utils';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  constructor(private http: HttpClient) {}
  login(user): Promise<any> {
    const url: string = `${BASE_URL}/auth/login`;
    return new Promise((resolve, reject) => {
      this.http.post(url, user).toPromise().then((resp: any) => {
        localStorage.setItem('token', resp.Authorization);
        resolve();
      }).catch((a) => {
        reject(a);
      });
    });
  }
  logout(): Promise<any> {
    const url: string = `${BASE_URL}/auth/logout`;
    return new Promise((resolve, reject) => {
      this.http.post(url, {}).toPromise().then((resp: any) => {
        resolve();
      }).catch((a) => {
        reject(a);
      }).finally(() => {
        localStorage.removeItem('token');
      });
    });
  }
  canActivate() {
    return !!localStorage.getItem('token');
  }
}
