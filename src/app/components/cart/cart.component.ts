import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts;
  cartDetails;
  subTotal = 0;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this._getCart();
  }

  _getCart(): void {
    let cartId = JSON.parse(localStorage.getItem("USER_DATA"))[0].cartId;
    this.cartService.getAll(cartId).subscribe(
      (response) => {
        this.carts = response;
        this.subTotal = 0;
        this.carts.forEach(e => {
          this.subTotal += e.price;
        });
        console.log(response);
      }
    );
  }
  _increamentQTY(lineItemId, productPrice, quantity): void {

    let payload = {
      quantity: quantity,
      price: productPrice*quantity
    }

    this.cartService.updateLineItem(lineItemId, payload).subscribe(
      (response) => {
        this._getCart();
        console.log(response);
      }
    );
  }

  deleteItem(lineItemId): void {
    this.cartService.deleteItem(lineItemId).subscribe(
      (response) => {
        console.log(response);
        this._getCart();
      }
    );
  }

  _descreamentQTY(lineItemId, productPrice, quantity): void {
    if(quantity >= 1) {
      let payload = {
        quantity: quantity,
        price: productPrice*quantity
      }
  
      this.cartService.updateLineItem(lineItemId, payload).subscribe(
        (response) => {
          this._getCart();
          console.log(response);
        }
      );
    }
    else {
      alert("Số lượng phải lớn hơn 0");
    }
  }
  _emptyCart(): void {
    let cartId = JSON.parse(localStorage.getItem("USER_DATA"))[0].cartId;
    this.cartService.emptyCart(cartId).subscribe(
      (response) => {
        this._getCart();
        console.log(response);
      }
    );
  }

}
