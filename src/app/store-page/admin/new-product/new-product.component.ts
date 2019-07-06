import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productservice:ProductService,private router:Router) { }

  save(product){ 
    const publishProduct = confirm("Are You Sure ?");
    if(publishProduct){
      this.productservice.createProduct(product);
      this.router.navigate(["manage-products"]);
    } 
  }

  ngOnInit() {
  }

}
