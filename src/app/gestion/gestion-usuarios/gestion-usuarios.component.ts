import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  tableTitle = [
    {title: "Nombre"},
    {title: "Apellido"},
    {title: "Email"},
    {title: "Telefono"},
    {title: "Direccion"}
  ]
 
  tableContent = [
    {content: "Fulano"},
    {content: "Menganez"},
    {content: "fulano@gmail.com"},
    {content: "091234567"},
    {content: "aqui 234 ap 5"}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
