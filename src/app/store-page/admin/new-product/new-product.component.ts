import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import {take} from "rxjs/operators"
@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {

  showProduct={};
  constructor(
    private productservice:ProductService,
    private router:Router,
    private route:ActivatedRoute
    )
    {
        let uid = this.route.snapshot.paramMap.get("id");
        // if(uid) {
        //   // console.log(uid);
        //   this.productservice.showProduct(uid).pipe(take(1)).subscribe(sp => this.showProduct=sp);
        // }
     }

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
