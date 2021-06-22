import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  datos = {
    type: "",
    user: "",
    email: "",
    telefono: "",
    nombre: "",
    apellido: "",
    direccion: ""
  }
    
    clickHandler(e:any){
      e.preventDefault;
      console.log(this.datos);
    }

  constructor() { }

  ngOnInit(): void {
  }

}
