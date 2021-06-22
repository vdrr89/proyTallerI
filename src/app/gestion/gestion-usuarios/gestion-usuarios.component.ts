import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Usuarios } from 'src/app/clases/usuarios'; 
import { UsuariosService } from 'src/app/servicios/usuarios.service'; 
import { event } from 'jquery';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  usu: Usuarios[] = []; 
  usuarios:Usuarios = {
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:""
  }

  tableTitle = [
    {title: "Nombre"},
    {title: "Apellido"},
    {title: "Email"},
    {title: "Telefono"},
    {title: "Direccion"}
  ]
  
  constructor(private _usuariosService: UsuariosService) {}

  ngOnInit(): void {
    this._usuariosService.getUsuarios().subscribe((response:any) => {
      this.usu = response;
      console.log("usu response: ", response);
    })
}}

//AGREGAR 
// submit(event){ 
//   event.preventDefault();
//   if (this.usuarios.usuario === ""){
//     this._usuariosService.insertarUsuarios(this.usuarios).subscribe((response:any)=>{
//       console.log("submit response: ", response);
//       this.usu.push(response);
//     })
//   } else {
//     this._usuariosService.actualizarUsuarios(this.usuarios).subscribe((response:any)=>{
//       console.log("else actualizar usuario: ", response);
//       this.usu.map((item:Usuarios)=>{
//         if(item.usuario === this.usuarios.usuario){
//           item.apellido = this.usuarios.apellido;
//           item.direccion = this.usuarios.direccion;
//           item.email = this.usuarios.email;
//           item.nombre = this.usuarios.nombre;
//           item.telefono = this.usuarios.telefono;
//         }
//         return item;
//       })
//       //acá irían los msjs de que se completó correctamente o incorr con this.funct.subfunct = true ó false
//     })
//   }
// }

//acá iría el evento onChange que va con usuarios admin o cliente... 

//UPDATE
// Update(usuarios){
//   this.usuarios.usuario = usuarios.usuario;
//   this.usuarios.nombre = usuarios.nombre;
//   this.usuarios.apellido = usuarios.apellido;
//   this.usuarios.email = usuarios.email;
//   this.usuarios.telefono = usuarios.telefono;
//   this.usuarios.direccion = usuarios.direccion;
// }