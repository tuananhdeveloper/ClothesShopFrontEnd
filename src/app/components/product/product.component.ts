import { Component, OnInit } from '@angular/core';
import { constants } from 'src/app/constants';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: any;
  constructor(
    private productService: ProductService
  ){

   }

  ngOnInit(): void {
    this.getProducts();
  }

  addItemToCart(id: string, price: number): void {
    let cartId = JSON.parse(localStorage.getItem("USER_DATA"))[0].cartId;
    this.productService.addToCart(cartId, id, price).subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

  getProducts(): void {
    this.productService.getAll().subscribe(
      (response) => {
        console.log(response);
        this.products = response;
      }
    );
  }
}
