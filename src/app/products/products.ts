import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class ProductsComponent implements OnInit {
  products : any;
  constructor() {}
  ngOnInit() {
    this.products = [
      { id: 1, name: 'Computer', price: 5000, selected: true },
      { id: 2, name: 'Printer', price: 1200, selected: false },
      { id: 3, name: 'Smart Phone', price: 2000, selected: true },
    ];
  }

  protected handleDelete(product: any) {
    let v = confirm('êtes vous sûre de vouloir supprimer ?');
    if(v==true){
      this.products=this.products.filter((p:any)=>p.id != product.id)
    }
  }
}
