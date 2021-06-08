import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = "Soy cliente";
  admin = "Trabajo en la tienda";
  login = "login";

  noAccMsj = "No tienes una cuenta? No te preocupes, puedes "
  createAccLink = "registrarte aquí";

  username = "algo";
  password = "algomas";

  submitForm(e:any){
    e.preventDefault;
    console.log(this.username);
    console.log(this.password);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
