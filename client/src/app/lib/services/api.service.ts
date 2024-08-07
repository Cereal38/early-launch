import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:8080';

  constructor(private _http: HttpClient) {}

  getHello(): Observable<any> {
    return this._http.get(`${this.apiUrl}/`);
  }
}