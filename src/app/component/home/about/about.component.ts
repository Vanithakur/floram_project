import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/service/products.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about:any;
  constructor(private aboutService: ProductsService) { }

  ngOnInit(): void {
    this.aboutService.getAbout().subscribe(res =>{
      this.about = res;      
    });
  }

}
