import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Product {
  products = [
    { id: 1, name: 'Computer', price: 5000, selected: true },
    { id: 2, name: 'Printer', price: 1200, selected: false },
    { id: 3, name: 'Smart Phone', price: 2000, selected: true },
  ];
  constructor() {}

  getAllProducts(){
    return this.products;
  }
  deleteProduct(product : any){
    this.products = this.products.filter((p: any) => p.id != product.id);
  }

}
