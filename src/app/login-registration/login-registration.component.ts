import { Component, OnInit } from '@angular/core';
import { InterlinkService } from '../interlink.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-login-registration',
	templateUrl: './login-registration.component.html',
	styleUrls: [ './login-registration.component.css' ]
})
export class LoginRegistrationComponent implements OnInit {
	user: object;
	show: boolean;
	mustRegister: boolean;
	mustLogin: boolean;
	constructor(private interlink: InterlinkService, private _router: Router) {
		this.user = {
			name: '',
			email: '',
			password: '',
			cpassword: ''
		};
		this.show = false;
		this.mustRegister = false;
		this.mustLogin = true;
  }
    //registration and login routes
    register(){
      // console.log("registering from component"); //step 1
      // this.interlink.register(this.user); //step 2
      this.interlink.register(this.user, (res) => { 
        if(res == 'passwordfail'){
          console.log("rawr");
          alert("your passwords must match");
        }
        if(res == 'success'){
          // console.log("success!!!");
  
          if(this.user['password'] != this.user['cpassword']) {
            this.show = true;
            if (this.show == true){
              console.log("it is true");
              alert("passwords must match")
              //this doesnt work
              // this._router.navigate(['errors'])
              
            }
          } 
  
          // this._router.navigate(['dashboard']) //if registration is succesful, navigate to dashboard
        }
        // console.log("back in component");
      })
    }
    login(){
      this.interlink.login(this.user, (res) => {
        if(res == 'success'){
          console.log("success at login!!!");
          this._router.navigate(['dashboard'])
        } else {
          console.log("user not found");
        }
      })
    }
    toggleLogin(){
      this.mustRegister = false;
      this.mustLogin = true;
    }
  
    backToRegister(){
      this.mustRegister = true;
      this.mustLogin = false;
    }
  
    checkSession(cb){
      this.interlink.checkSession(cb)
    }
    

	ngOnInit() {}
}
