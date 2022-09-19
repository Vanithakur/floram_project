import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable(
    {
        providedIn:'root'
    }
)
export class OfferService{
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){

    }
    getOffer(){
        return this.http.get(this.baseUrl + 'offer');
    }

}