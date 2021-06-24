import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';
import { GestionproductosComponent } from '../gestionproductos.component';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})
export class CrearProductoComponent implements OnInit {

  prod: Productos[] = [];
  productos:Productos = { 
    codigo:"",
    imgUrl:"",
    titulo:"",
    autor:"",
    editorial:"",
    capitulo:"",
    proveedor:"",
    fechaCompra:"",
    nuevasUnidades:0,
    stock:0,
    precioCosto:0,
    precioVenta:0
  }

  constructor(private _productosService: ProductosService,private _activedRoute: ActivatedRoute) { }
  ngOnInit(): void {

  }

  // AGREGAR PROD
  submit(event:any){
    if (this.productos.codigo === "") {
      this._productosService.addProductos(this.productos).subscribe((response:any)=>{
        console.log("submit response: ", response);
        this.prod.push(response);
      })
    } else {
      this._productosService.actualizarProductos(this.productos).subscribe((response:any)=>{
        console.log("submit else response: ", response);
        this.prod.map((item:Productos)=>{
          if(item.codigo === this.productos.codigo){
            item.imgUrl = this.productos.imgUrl;
            item.titulo = this.productos.titulo;
            item.autor = this.productos.autor;
            item.editorial = this.productos.editorial;
            item.capitulo = this.productos.capitulo;
            item.proveedor = this.productos.proveedor;
            item.fechaCompra = this.productos.fechaCompra;
            item.nuevasUnidades = this.productos.nuevasUnidades;
            item.stock = this.productos.stock;
            item.precioCosto = this.productos.precioCosto;
            item.precioVenta = this.productos.precioVenta;
          }
          return item;
        })
      })
    }
  }

}
