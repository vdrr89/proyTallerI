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

  // infIdes = {
  //   code: ""
  // }
  
  // infArticulo = {
  //   titulo: "",
  //   autor: "",
  //   editorial: "",
  //   cap: ""
  // }
  
  // infComercial = {
  //   proveedor: "",
  //   fechaCompra: "", // cambiar a fecha cuanto antes
  //   nuevasUnidades: "",
  //   precioCosto: "",
  //   precioVenta: ""
  // }

  prod!: Productos[];
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

  submit(event:any){ //ese any está distinto al de prof, xq sino me da error
    event.preventDefault();
    if (this.productos.cod === ""){
      this._productosService.insertarProductos(this.productos).subscribe((response:any) => {
        console.log("response:", response);
        this.prod.push(response);
      })
    } else {
      console.log("response else: el producto ya existe")
        //acá irían los msjs de que se completó correctamente o incorr con this.funct.subfunct = true ó false
      }
}
}