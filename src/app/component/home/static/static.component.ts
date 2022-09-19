import { Component, OnInit } from '@angular/core';
import { OfferService } from 'src/app/service/offer.service';

@Component({
  selector: 'app-static',
  templateUrl: './static.component.html',
  styleUrls: ['./static.component.css']
})
export class StaticComponent implements OnInit {
offers:any;
  constructor(private offerService: OfferService) { }

  ngOnInit(): void {
    this.offerService.getOffer().subscribe(res=>{
      this.offers =res;
    });
  }

}
