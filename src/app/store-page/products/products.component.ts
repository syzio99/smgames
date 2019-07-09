import { Component } from '@angular/core';

import { ProductService } from './../services/product.service';
// import { FilterPipe } from '../pipes/filter.pipe';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent  {
  products={};
  term:string;
  showSpinner:boolean=true;
  constructor(productService:ProductService) { 
     productService.fetchProduct().subscribe((data)=>{
      this.products = data;
      this.showSpinner = false
     });
  }

  showSortBy:boolean=false;
  showSortByDropdown(){
   this.showSortBy = !this.showSortBy;
  }
  
  showCategory:boolean=false;
  showCategoryDropdown(){
    this.showCategory = !this.showCategory;
   }
}
