import { Component, OnInit } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  allProducts;
  constructor(private ProductService:ProductService) {
    this.allProducts = this.ProductService.fetchProduct();
   
   }
  count =0;
   call(){return this.count +=1;}
  ngOnInit() {
  }

}
