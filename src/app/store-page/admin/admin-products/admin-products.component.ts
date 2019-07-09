import { Component } from '@angular/core';
import { ProductService } from './../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent{

  allProducts;
  term:string;
  constructor(private ProductService:ProductService) {
     this.ProductService.fetchProduct().subscribe((data)=>{
      this.allProducts = data;

     });;
   }
  // count =0;
  //  call(){return this.count +=1;}
    delete(uid){
      const delteProduct = confirm("Are You Sure ?");
      if(delteProduct){
        this.ProductService.deleteProduct(uid);
      }
    }

}
