import { Injectable } from '@angular/core'; // esto hace que se pueda usar el @injectable
import {HttpClient} from '@angular/common/http'
import { Productos } from '../clases/productos';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  url = "http://localhost:3000/productos";  //la url de mi json server levantado que me da cuando npm run server /elArreglo que uso en este componente

  constructor(private _http: HttpClient) { }  
    
    getProductos(){
      return this._http.get<Productos>(this.url);
    }
  
    insertarProductos(Productos:any){
      return this._http.post(this.url,Productos);
    }
    actualizarProductos(Productos:any){
      return this._http.put(this.url+"/"+Productos.cod,Productos);
   }
}
