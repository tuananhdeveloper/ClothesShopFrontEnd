import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:2021/cart';
const lineItemUrl = 'http://localhost:2021/lineItem';
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { 

  }

  getAll(cartId): Observable<any> {
    return this.http.get(baseUrl + "/" + cartId);
  }

  deleteItem(lineItemId): Observable<any> {
    return this.http.delete(lineItemUrl + "/" + lineItemId);
  }

  updateLineItem(lineItemId, payload): Observable<any> {
    return this.http.patch(lineItemUrl + "/" + lineItemId, payload);
  }
  
  emptyCart(cartId): Observable<any> {
    return this.http.delete(baseUrl + "/" + cartId);
  }

}
