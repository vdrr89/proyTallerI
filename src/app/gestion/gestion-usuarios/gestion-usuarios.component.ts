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
    id:"",
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:""
  }

  tableTitle = [ // estático solo tíutlo
    {title: "Usuario"},
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

goToUpdate(usuarios:Usuarios){
  this._route.navigate(["/gestion/usuarios/crearusuario",usuarios.id]);
}

delete(id: string){
  this._usuariosService.eliminarUsuarios(id).subscribe((response:any)=>{
    console.log("delete usu response: ", response);
    const newItems = this.usu.filter((item:any)=>{
      return item.id !== id;
    });
    this.usu = newItems;
  })
}

}

