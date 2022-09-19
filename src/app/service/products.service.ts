import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable(
    {
        providedIn:'root'
    }
)
export class ProductsService{
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){

    }
    getProducts(){
        return this.http.get(this.baseUrl + 'Products');
    }
    getAbout(){
        return this.http.get(this.baseUrl + "about");
    }

}