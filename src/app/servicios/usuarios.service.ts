import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Usuarios } from '../clases/usuarios'; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:3000/usuarios";

  constructor(public _http: HttpClient) {}

  getUsuarios(){
    return this._http.get<Usuarios[]>(this.url);
  }

  insertarUsuarios(Usuarios:Usuarios){
    return this._http.post(this.url,Usuarios);
  }

  actualizarUsuarios(Usuarios:Usuarios){
    return this._http.put(this.url+"/"+Usuarios.id,Usuarios);
 }

  eliminarUsuarios(id:string){
    return this._http.delete(this.url+"/"+id);
  }

}
