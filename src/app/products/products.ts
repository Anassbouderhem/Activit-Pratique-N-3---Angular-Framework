import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor(private productService : Product) {}
  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts(){
    this.products = this.productService.getAllProducts();
  }

  protected handleDelete(product: any) {
    let v = confirm('êtes vous sûre de vouloir supprimer ?');
    if(v==true){
      this.productService.deleteProduct(product);
      this.getAllProducts();
    }
  }
}
