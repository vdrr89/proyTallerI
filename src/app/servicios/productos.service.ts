import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from '../clases/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = "http://localhost:3000/productos";

  constructor(public _http: HttpClient) { }

    getProductos(){
      return this._http.get<Productos[]>(this.url);
    }

    addProductos(Productos:Productos){
      return this._http.post(this.url,Productos);
    }

    actualizarProductos(prod:Productos){
      return this._http.put(this.url+"/"+prod.id,prod);
   }

    eliminarProductos(id:string){
    return this._http.delete(this.url+"/"+id);
  }
}
