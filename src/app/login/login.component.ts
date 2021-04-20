import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SaveDataService } from '../save-data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  // constructor(private fb: FormBuilder) { }

  isValid = 0;
  wrongPwd = false;
  username;

  constructor(
    private validateLogin: SaveDataService, 
    private routeToUserDetails: Router
    ) {}

  // checkUserCredentials() {

  // for (let i = 0; i < this.validateLogin.details.length; i++) {
  //   if (this.validateLogin.details[i]['username'] === this.loginForm.controls.username.value) {
  //     if (this.validateLogin.details[i]['password'] === this.loginForm.controls.password.value) {
  //       alert("Welcome" + " " + this.loginForm.controls.username.value);
  //     } 
  //     else {
  //       alert("Invalid credentials")
  //     }
  //   } 
  // }

  // }  // //INSTED OF THIS USE BELOW 

  checkUserCredentials() {  /* Function for check valid user or not */
    this.isValid = 0;
    for (let i = 0; i < this.validateLogin.details.length; i++) {
      if (this.validateLogin.details[i]['username'] === this.loginForm.controls.username.value) {  
        if (this.validateLogin.details[i]['password'] === this.loginForm.controls.password.value) {

      /* 0 => valid(login),
         1 => invalid(no user found), 
         2 => invalid(incorrect password) */

          this.isValid = 0;
          this.username = this.validateLogin.details[i]['username']; /*For Router URL name */
          break;
        } else {
          this.isValid = 1;
          break;
        }
      } else {
        this.isValid = 2;
      }
    }

    // if (this.isValid == 0) {
    //   this.routeToUserDetails.navigate(['userDetails'], { queryParams: {
    //     username: this.loginForm.controls.username.value
    //   }});

    
    if (this.isValid == 0) { 
      /* 
      Insted of this loop 
      // this.username = this.validateLogin.details[i]['firstname']; 
      is used inside the above for-loop at checkUserCredentials() function
      */
      // for (let i = 0; i < this.validateLogin.details.length; i++) {  
      //   if (this.validateLogin.details[i]['username'] === this.loginForm.controls.username.value) {
      //     if (this.validateLogin.details[i]['password'] === this.loginForm.controls.password.value) {
      //       this.username = this.validateLogin.details[i]['firstname'];
      //     }
      //   }
      // }
      this.routeToUserDetails.navigate(['userDetails', this.username]); /* ROUTER TO NAVIGATE WITH USERNAME VARIABLE 
          VALUE IN URL, if userID and pwd are valid */
      // alert("welcome");  
      console.log ("Valid user")
    } else if (this.isValid == 1) {
      this.wrongPwd = true; //this.wrongPwd used for template error
      //alert("incorrect password");
    } else if (this.isValid == 2) {
      alert("no user found");
      console.error("Invalid user")
    }
  }

  ngOnInit(): void {
    //console.log(localStorage.getItem('userDetails')) //LOCAL STORAGE VALUES
    this.loginForm = new FormGroup({
      username: new FormControl('',
        [Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),

      password: new FormControl('',
        [Validators.required,
        Validators.minLength(4)
        ])
    });      

/*INSTED OF THIS ALSO CAN USE BELOW CODE WITH FORMBUILDER*/

    // this.loginForm = this.fb.group({
    //   username: [[null],[Validators.pattern("[^ @]*@[^ @]*"), Validators.required]],
    //   password: [[null], [Validators.minLength(4), Validators.required]]
    // })
  }

  submitLoginForm(): void {
    this.checkUserCredentials();
    console.log(this.loginForm.controls.username.value)
    // console.log(this.loginForm.value)
  }

}
