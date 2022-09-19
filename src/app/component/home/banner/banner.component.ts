import { Component, OnInit } from '@angular/core';
import { BannerService } from 'src/app/service/banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  bannerData:any;
  constructor(private bannerService: BannerService) { }

  ngOnInit(): void {
    this.bannerService.getBanner().subscribe(
      res=>{
        this.bannerData = res;
        
      }
    )
  }

}
