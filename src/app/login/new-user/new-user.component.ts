import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  send = "send";

  nombre = "fulano";
  username = "alguien";
  email = "algo@algo.com";
  password = "alguna";
  direccion = "calle 123";
  telefono = "123456789";

  submitNewUser(e:any){
    e.preventDefault;
    console.log(this.nombre);
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    console.log(this.direccion);
    console.log(this.telefono);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
