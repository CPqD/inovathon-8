import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../utils';

@Injectable()
export class CheckService {
  constructor(private http: HttpClient) {}

  getByStatus(status): Promise<any> {
    const url: string = `${BASE_URL}/check/by_status/${status}`;
    return this.http.get(url).toPromise();
  }

  getBydId(id): Promise<any> {
    const url: string = `${BASE_URL}/check/by_id/${id}`;
    return this.http.get(url).toPromise();
  }

  setReceipt(body): Promise<any> {
    const url: string = `${BASE_URL}/setData`;
    return this.http.post(url, body).toPromise();
  }

  deleteCheck(id): Promise<any> {
    const url: string = `${BASE_URL}/check/by_id/${id}`;
    return this.http.delete(url).toPromise();
  }
}
