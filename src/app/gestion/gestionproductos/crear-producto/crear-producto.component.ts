import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';
import { GestionproductosComponent } from '../gestionproductos.component'; // acá estan las funciones para sunmit y update productos 

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

 
  prod: Productos[] = [];
  productos:Productos = { 
    cod:"",
    titulo:"",
    autor:"",
    editorial:"",
    capitulo:"",
    proveedor:"",
    fechaCompra:"",
    stock:0,
    precioCosto:0,
    precioVenta:0
  }


  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
  }

  submit(event:any){ 
    event.preventDefault();
    if (this.productos.cod === ""){
      this._productosService.insertarProductos(this.productos).subscribe((response:any) => {
        console.log("response:", response);
        this.prod.push(response);
      })
    } else {
      console.log("response else: ")
      }
}
}