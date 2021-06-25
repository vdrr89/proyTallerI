import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Usuarios } from 'src/app/clases/usuarios'; 
import { UsuariosService } from 'src/app/servicios/usuarios.service'; 

import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gestion-usuarios',
  templateUrl: './gestion-usuarios.component.html',
  styleUrls: ['./gestion-usuarios.component.css']
})
export class GestionUsuariosComponent implements OnInit {

  usu: Usuarios[] = []; 
  backup: Usuarios[] = [];
  usuarios:Usuarios = {
    id:0,
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:""
  }

  editado = "Ha editado un usuario exitosamente!";
  noEditado = "No se ha editdo el usuario";

  tableTitle = [ // estático solo tíutlo
    {title: "Nombre"},
    {title: "Apellido"},
    {title: "Email"},
    {title: "Telefono"},
    {title: "Direccion"}
  ]
  
  constructor(
    private _usuariosService: UsuariosService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
    ) {}

  ngOnInit(): void {
    this._usuariosService.getUsuarios().subscribe((response:any) => {
      this.usu = response;
      console.log("usu response: ", response);
      this.backup = this.usu;
    })
}

//GO TO EDITAR USUARIO
goToUpdate(usuarios:Usuarios){
  this._route.navigate(["/gestion/crearusuario",usuarios.id]);
}

//ELIMINAR USUARIO
delete(id: number){
  this._usuariosService.eliminarUsuarios(id).subscribe((response:any)=>{
    console.log("delete usu response: ", response);
    const newItems = this.usu.filter((item:any)=>{
      return item.id !== id;
    });
    this.usu = newItems;
  })
}

}

