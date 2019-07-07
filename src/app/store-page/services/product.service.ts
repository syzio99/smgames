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

  updateProduct(uid,product){
    return this.database.object("/products/"+uid).update(product);
  }

  deleteProduct(uid){
    return this.database.object("/products/"+uid).remove();
  }

  fetchProduct(){
    return this.database.list("/products").snapshotChanges();
  }

  showProduct(uid){
    return this.database.object("/products/"+uid).valueChanges();
  }
}
