import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:2021/users';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Access-Control-Allow-Origin':'*'})
  };

  constructor(private http: HttpClient) { 

  }

  register(data: any): Observable<any> {
    // return this.http.get('http://localhost:2021/products');
    return this.http.post('http://localhost:2021/users/register', data);
  }

  login(data: any): Observable<any> {
    return this.http.post(baseUrl + "/login", data);
  }

}
