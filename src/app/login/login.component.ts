import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userBtn = "Soy cliente";
  adminBtn = "Trabajo en la tienda";
  loginBtn = "login";

  noAccMsj = "No tienes una cuenta? No te preocupes, puedes "
  createAccLink = "registrarte aquí";

  user = {
    username:"",
    password:""
  }


  submitForm(e:any){
    e.preventDefault;
    console.log(this.user);
  }

  constructor() { 

  }

  ngOnInit(): void {
  }

}
