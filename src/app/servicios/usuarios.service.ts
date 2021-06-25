import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Usuarios } from '../clases/usuarios'; 

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  url = "http://localhost:3000/usuarios";

  constructor(private _http: HttpClient) {}

  getUsuarios(){
    return this._http.get<Usuarios[]>(this.url);
  }

  insertarUsuarios(Usuarios:any){
    return this._http.post(this.url,Usuarios);
  }

  actualizarUsuarios(Usuarios:any){
    return this._http.put(this.url+"/"+Usuarios.usuario,Usuarios);
 }

  eliminarUsuarios(id:number){
    return this._http.delete(this.url+"/"+id);
  }

}
