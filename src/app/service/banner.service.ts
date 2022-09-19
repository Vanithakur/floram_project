import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable(
    {
        providedIn:'root'
    }
)
export class BannerService{
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){

    }
    getBanner(){
        return this.http.get(this.baseUrl + 'banner');
    }

}