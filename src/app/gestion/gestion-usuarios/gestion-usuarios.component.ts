import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  tableTitle = {
    nombre: "Nombre",
    apellido: "Apellido",
    email: "Email",
    telefono: "Telefono",
    direccion: "Direccion"
  }
    
    datos = {
      nombre: "Fulano",
      apellido: "Mengano",
      email: "y@j.com",
      telefono: "093456789",
      direccion: "una 234 ap 5"
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
