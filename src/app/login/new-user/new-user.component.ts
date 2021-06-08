import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  send = "send";

  user = {
    username:"",
    email:"",
    password:""
  }

  userDetail = {
    nombre:"",
    direccion:"",
    telefono:""
  }
  

  submitNewUser(e:any){
    e.preventDefault;
    console.log(this.user);
    console.log(this.userDetail);
  }

  constructor() {

   }

  ngOnInit(): void {
  }

}
