import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:2021/products';
const cartUrl = 'http://localhost:2021/cart'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { 

  }

  getAll(): Observable<any> {
    return this.http.get(baseUrl);
  }

  addToCart(cartId, productId, price): Observable<any> {
    return this.http.post(cartUrl + "/" + cartId + "?productId=" + productId + "&price=" + price, null);
  }
}
