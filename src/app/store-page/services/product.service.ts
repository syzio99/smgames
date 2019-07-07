import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private database:AngularFireDatabase) { }

  createProduct(product){
    return this.database.list("/products").push(product);
  }

  fetchProduct(){
    return this.database.list("/products").valueChanges();
  }

  showProduct(uid){
    return this.database.object("/products/"+uid).valueChanges();
  }
}
