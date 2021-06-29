import { Component, OnInit } from '@angular/core';
import { Usuarios } from 'src/app/clases/usuarios';
import { UsuariosService } from 'src/app/servicios/usuarios.service';

@Component({
  selector: 'app-gestion-usuarios-filtro',
  templateUrl: './gestion-usuarios-filtro.component.html',
  styleUrls: ['./gestion-usuarios-filtro.component.css']
})
export class GestionUsuariosFiltroComponent implements OnInit {

  hideDiv = false;

  usuarios:Usuarios = { 
    id:"",
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:""
  };
  usuarios2: Usuarios[] = [];
  backup: Usuarios[] = [];
  
  id = "";
  usuario = "";
  email = "";
  telefono = 0;
  nombre = "";
  apellido = "";
  direccion = "";
  
  constructor(
    private _usuariosService: UsuariosService,
    ) { }
  
    ngOnInit(): void {
      this._usuariosService.getUsuarios().subscribe(response => {
        console.log("filtro usuarios response: ", response);
        this.usuarios2 = response;
        this.backup = this.usuarios2;
      })
    }
  
    showDiv(){
      this.hideDiv = !this.hideDiv;
      this.limpiarFiltro();
    }
  
    keyupSearch(event:any){
      this.buscar();
    }

    buscar(){
      if(this.usuario.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
          return usuario.usuario === this.usuario;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados usuario: ", usuariosFiltrados);
      };
  
      if(this.email.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
          return usuario.email === this.email;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados email: ", usuariosFiltrados);
      };
  
      if(this.telefono > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
        return usuario.telefono === this.telefono;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados telefono: ", usuariosFiltrados);
      };
  
      if(this.nombre.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
          return usuario.nombre === this.nombre;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados nombre: ", usuariosFiltrados);
      };
  
      if(this.apellido.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
          return usuario.apellido === this.apellido;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados apellido: ", usuariosFiltrados);
      };

      if(this.direccion.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usuario => {
          return usuario.direccion === this.direccion;
        });
        this.usuarios2 = usuariosFiltrados;
        console.log("buscar() usuariosFiltrados direccion: ", usuariosFiltrados);
      }
    }
  
    limpiarFiltro(){
      this.id = "";
      this.usuario = "";
      this.email = "";
      this.telefono = 0;
      this.nombre = "";
      this.apellido = "";
      this.direccion = "";
      this.usuarios2 = this.backup;
    }
  
  }
