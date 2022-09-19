import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {
Allproduct:any;
about:any;
  constructor(private products: ProductsService) { }

  ngOnInit(): void {
    this.products.getProducts().subscribe(res=>{
           this.Allproduct = res;   
    });
   
  }

}
