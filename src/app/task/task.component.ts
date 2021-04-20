import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  title = 'myAngular';
  name = "Username here..";
  password = "Password here..";
  reflect = "changed";
  addIpBox;
  numbers: number[] = [];
  addPersonName: string;
  addPersonAge: number;
  condition: boolean = true

  constructor() {
    setTimeout(() => {
      this.name = 'Changed Dynamically.. ';
      this.password = 'Also Password Will..!'
    }, 1500);
  }

  test
  testvalue
  changeIt() {
    this.test = this.testvalue;
  }

  person: object[] = [

  ]

  addTextbox() {
    this.numbers.push(this.numbers.length + 1)
    // this.addIpBox = document.createElement("input")
    // document.getElementById('the-form').appendChild(this.addIpBox)
  }

  removeTextbox() {
    this.numbers.pop()
    //document.getElementById('the-form').removeChild(this.addIpBox)
  }

  addPerson() {
    this.person.push({ name: this.addPersonName, age: this.addPersonAge })
    this.addPersonName = null
    this.addPersonAge = null
    this.condition = false;
    console.log(this.person)
    // if (this.addPersonAge >= 20 ){
    //   document.getElementById('showPeople').style.color = "red";
    // }
  }

  clearPerson() {
    this.person.pop()
    if (this.person.length == 0) {
      this.condition = true;
    } else {
      this.condition = false;
    }
    console.log(this.person)
  }

  deleteAll() {
    this.condition = true;
    this.person = []
    console.log(this.person)
  }

  isImportant: string;

  onClickSubmit(result){
    console.log(result.Username)
  }

  ngOnInit(): void {
  }

}
