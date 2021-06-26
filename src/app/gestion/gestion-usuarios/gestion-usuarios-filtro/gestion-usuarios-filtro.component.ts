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
    id:0,
    usuario:"",
    email:"",
    telefono:0,
    nombre:"",
    apellido:"",
    direccion:""
      }
  usuarios2: Usuarios[] = [];
  backup: Usuarios[] = [];
  
  id = 0;
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
        let usuariosFiltrados = this.usuarios2.filter(usua => {
          return usua.usuario === this.usuario;
        });
        this.usuarios2 = usuariosFiltrados;
      };
  
      if(this.email.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usua => {
          return usua.email === this.email;
        });
        this.usuarios2 = usuariosFiltrados;
      };
  
      if(this.telefono > 0){
        let usuariosFiltrados = this.usuarios2.filter(usua => {
        return usua.telefono === this.telefono;
        });
        this.usuarios2 = usuariosFiltrados;
      };
  
      if(this.nombre.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usua => {
          return usua.nombre === this.nombre;
        });
        this.usuarios2 = usuariosFiltrados;
      };
  
      if(this.apellido.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usua => {
          return usua.apellido === this.apellido;
        });
        this.usuarios2 = usuariosFiltrados;
      };

      if(this.direccion.length > 0){
        let usuariosFiltrados = this.usuarios2.filter(usua => {
          return usua.direccion === this.direccion;
        });
        this.usuarios2 = usuariosFiltrados;
      }
    }
  
    limpiarFiltro(){
      this.id = 0;
      this.usuario = "";
      this.email = "";
      this.telefono = 0;
      this.nombre = "";
      this.apellido = "";
      this.direccion = "";
      this.usuarios2 = this.backup;
    }
  
  }
