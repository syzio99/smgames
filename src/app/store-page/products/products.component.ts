import { Component } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products;
  showSpinner:boolean=true;
  constructor(productService:ProductService) { 
    this.products = productService.fetchProduct();
    this.products.subscribe(() => this.showSpinner = false);
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
