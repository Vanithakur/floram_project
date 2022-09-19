import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
@Injectable(
    {
        providedIn:'root'
    }
)
export class BlogService{
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){

    }
    getBlog(){
        return this.http.get(this.baseUrl + 'blog');
    }

}