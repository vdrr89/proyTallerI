import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  usu: Usuarios[] = [];
  usuarios:Usuarios = {
    id:0,
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:"",
  }
  usuarios2: Usuarios = new Usuarios();
  
  constructor(
    private _usuariosService: UsuariosService,
    private _activatedRoute: ActivatedRoute,
    private _route: Router
  ) { }

  id=0;
// html enlazar usuario2 arreglo vacio con ngmodel 

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((item:any)=>{
      this.id = item.get('id');
      if(this.id>0){
        this._usuariosService.getUsuarios().subscribe((response:Usuarios[])=>{
          const item = response.filter((usu2:any)=>{
            return usu2.id == this.id;
          })[0];
          this.usuarios2 = item;
        })
      }
    })
  }

  
  submit(event:any){ //tengo mis dudas con sus response:any
    if(this.id>0){
      this._usuariosService.actualizarUsuarios(this.usuarios2).subscribe((response:any)=>{
        console.log("submit if response: ", response);
        
      });
    } else { //update
      this._usuariosService.insertarUsuarios(this.usuarios2).subscribe((response:any)=>{
        console.log("submit else response: ", response);
        this.update2(this.usuarios);
        this.cleanFormData();
      });
    }
  }

  update2(usuarios:Usuarios){
    this.usuarios.id = usuarios.id;
    this.usuarios.usuario = usuarios.usuario;
    this.usuarios.email = usuarios.email;
    this.usuarios.telefono = usuarios.telefono;
    this.usuarios.nombre = usuarios.nombre;
    this.usuarios.apellido = usuarios.apellido;
    this.usuarios.direccion = usuarios.direccion;
  }

  cleanFormData(){
    this.usuarios2.id = 0;
    this.usuarios2.usuario = "";
    this.usuarios2.email = "",
    this.usuarios2.telefono = 0,
    this.usuarios2.nombre = "",
    this.usuarios2.apellido = "",
    this.usuarios2.direccion = ""
  }

}
