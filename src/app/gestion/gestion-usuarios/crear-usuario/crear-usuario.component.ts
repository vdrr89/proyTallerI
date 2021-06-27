import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})

export class CrearUsuarioComponent implements OnInit {

  usu: Usuarios[] = [];
  usuarios:Usuarios = {
    id:"",
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

  id="";

  ngOnInit(): void {
    this._activatedRoute.paramMap.subscribe((item:any)=>{
      this.id = item.get('id');
      if(this.id != ""){
        this._usuariosService.getUsuarios().subscribe((response:Usuarios[])=>{
          const item = response.filter((usu2:any)=>{
            return usu2.id == this.id;
          })[0];
          this.usuarios2 = item;
        })
      }
    })
  }

  //usuarios2 otra vez... OTRA VEZ... y eso que te dije que no lo toques...
  submit(event:any){ 
    if(this.usuarios2.id != ""){
      this._usuariosService.actualizarUsuarios(this.usuarios2).subscribe((response:any)=>{
        console.log("submit if response: ", response);
        this._route.navigate(['/gestion/usuarios']);
      });
    } else { //update
      this._usuariosService.insertarUsuarios(this.usuarios2).subscribe((response:any)=>{
        console.log("submit else response: ", response);
        this.update2(this.usuarios);
        this.cleanFormData();
        this._route.navigate(['/gestion/usuarios']);
      });
    }
  }

  update2(usuarios:Usuarios){
    this.usuarios2.id = usuarios.id;
    this.usuarios2.usuario = usuarios.usuario;
    this.usuarios2.email = usuarios.email;
    this.usuarios2.telefono = usuarios.telefono;
    this.usuarios2.nombre = usuarios.nombre;
    this.usuarios2.apellido = usuarios.apellido;
    this.usuarios2.direccion = usuarios.direccion;
  }

  cleanFormData(){
    console.log("crear-usuario cleanFormData");
    this.usuarios2.id = "";
    this.usuarios2.usuario = "";
    this.usuarios2.email = "",
    this.usuarios2.telefono = 0,
    this.usuarios2.nombre = "",
    this.usuarios2.apellido = "",
    this.usuarios2.direccion = ""
  }

}
