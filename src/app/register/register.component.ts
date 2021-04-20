import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SaveDataService } from '../save-data.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser: FormGroup;

  constructor(
    private fb: FormBuilder,
    private saveData: SaveDataService,
    private savedUser: Router) { }

  isValid = false

  toAdd() {
    this.isValid = false;
    for (let i = 0; i < this.saveData.details.length; i++) {
      if (this.registerUser.controls.userName.value === this.saveData.details[i]['username']) {
        this.isValid = true;
      }
    }

    if (this.isValid == false) {

      let userDetailsLocal = [];

      userDetailsLocal.push({
        'username': this.registerUser.controls.userName.value,
        'firstname': this.registerUser.controls.firstName.value,
        'lastname': this.registerUser.controls.lastName.value,
        'password': this.registerUser.controls.password.value,
        'gender': this.registerUser.controls.gender.value,
      });

      console.log(localStorage.getItem('userDetails1'))
      let localStorageDetails = [];
      if (localStorage.getItem('userDetails') != null) {
        for (let all of JSON.parse(localStorage.getItem('userDetails'))) {
          localStorageDetails.push(all);
        }
      }

      for (let all of localStorageDetails) {
        userDetailsLocal.push(all);
      }
      localStorage.setItem('userDetails', JSON.stringify(userDetailsLocal));
      //console.log(userDetailsLocal)

      this.saveData.details.push({
        'username': this.registerUser.controls.userName.value,
        'firstname': this.registerUser.controls.firstName.value,
        'lastname': this.registerUser.controls.lastName.value,
        'password': this.registerUser.controls.password.value,
        'gender': this.registerUser.controls.gender.value
      });
      this.registerUser.reset();
      //console.log(this.saveData.details);
      this.savedUser.navigate(['login']);
    } else {
      console.error('error....')
    }
  }

  ngOnInit(): void {

    this.registerUser = this.fb.group({

      firstName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]+')
        ]
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-zA-Z]+')
        ]
      ],
      userName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
        ]
      ],
      gender: [
        '',
        [
          Validators.required
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
        ]
      ],
      retypePassword: [
        '',
        [
          Validators.required
        ]
      ],
    });

  };

  checkPassword(parameterName: FormGroup) { //ParameterName value should be given as FormGroup
    return parameterName.get('password').value === parameterName.get('retypePassword').value;
  }

  submitRegisterUser() {
    this.toAdd();
    // console.log(this.registerUser.controls.password.value)
    //console.log(this.registerUser.get('password').value);
  }

}
