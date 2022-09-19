
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { environment } from "src/environments/environment";
export interface AuthResponseData {
    
    success: boolean;
    message: string;
    data: {
        name: string,
        phone: string,
       email: string,
        message: string,
    //   id: string,
    //   token: string,
    }

}
@Injectable(
    {
        providedIn:'root'
    }
)
export class ContactService{
    baseUrl = environment.baseUrl;
    constructor(private http: HttpClient){

    }
   
feedbackForm(name:string,phone:string,email:string, message:string){

        return this.http.post<AuthResponseData>(
            this.baseUrl + 'feedback_form',
            {
                name: name,
                phone: phone,
                email: email,
                message: message,
                // returnSecureToken: true
            }
        ) 
            // .pipe(catchError(this.handleError),
            //     tap(resData => {
            //         this.handleAuthentication(
            //             resData.data.email,
            //             resData.data.id,
            //             resData.data.token                      
            //         );
            //     })
            // );
    }
}
