import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    apiUrl = 'http://localhost:8080';

    constructor(private _http: HttpClient) {}

    get(endpoint: string): Observable<any> {
        return this._http.get(`${this.apiUrl}${endpoint}`);
    }
}
