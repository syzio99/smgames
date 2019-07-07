import { Component } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products;
  constructor(productService:ProductService) { 
    this.products = productService.fetchProduct();
  }

  showCategory:boolean=false;
  showSortBy:boolean=false;

  showSortByDropdown(){
   this.showSortBy = !this.showSortBy;
  }
  showCategoryDropdown(){
    this.showCategory = !this.showCategory;
   }
}
