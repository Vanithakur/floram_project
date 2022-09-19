import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, ContactService } from 'src/app/service/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  feedback:FormGroup;
    constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    this.feedback = new FormGroup({
			'userData' : new FormGroup({
			'name' : new FormControl(null, [Validators.required]),
			'phone' : new FormControl(null, [Validators.required]),
			'email' : new FormControl(null, [Validators.required, Validators.email]),
			'message': new FormControl(null, [Validators.required])
		  })

		});
  }
  onSubmit(){
console.log(this.feedback.value);
const name = this.feedback.value.userData.name;
const phone = this.feedback.value.userData.phone;
const email = this.feedback.value.userData.email;
const message = this.feedback.value.userData.message; 
      if(name == null && phone == null && email == null && message == null){
        alert("Please fill all the fields");
      }
        
   
        if(name != null && phone != null && email != null && message != null){
        let authObs : Observable<AuthResponseData>;
    
          authObs = this.contactService.feedbackForm(name,phone,email,message);
          authObs.subscribe(res=>{
           if(res){
            alert("You have successfully submitted your feedback !");
           }
            
          })
  
        this.feedback.reset();
        }
      
    }
  
  
  
}
