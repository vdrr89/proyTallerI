import { Component, OnInit } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-crear-producto',
  templateUrl: './crear-producto.component.html',
  styleUrls: ['./crear-producto.component.css']
})

export class CrearProductoComponent implements OnInit {

  prod: Productos[] = [];
  productos:Productos = { 
    id:0,
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
  producto2: Productos = new Productos();

  constructor(
    private _productosService: ProductosService,
    private _activedRoute: ActivatedRoute, 
    private route: Router
    ) { }

  id=0;

  ngOnInit(): void {
    this._activedRoute.paramMap.subscribe((item:any)=>{
      this.id = item.get('id');
      if(this.id>0){
        this._productosService.getProductos().subscribe((response:Productos[])=>{
          const item = response.filter((prod2:any)=>{
            return prod2.id == this.id;
          })[0];
          this.producto2 = item;
        })
      }
    })
  }

  submit(event:any){
    if(this.id>0){ //if url/:id = prod.id
      this._productosService.actualizarProductos(this.producto2).subscribe((response:any)=>{
        console.log("submit if response: ", response);
      });
    } else { //update
      this._productosService.addProductos(this.producto2).subscribe((response:any)=>{
        console.log("submit else response: ", response);
        this.update2(this.productos);
        this.cleanFormData();
      });
    }
  }

    update2(productos:Productos){
    this.productos.id = productos.id;
    this.productos.codigo = productos.codigo;
    this.productos.titulo = productos.titulo;
    this.productos.autor = productos.autor;
    this.productos.capitulo = productos.capitulo;
    this.productos.editorial = productos.editorial;
    this.productos.proveedor = productos.proveedor;
    this.productos.fechaCompra = productos.fechaCompra;
    this.productos.imgUrl = productos.imgUrl;
    this.productos.precioCosto = productos.precioCosto;
    this.productos.precioVenta = productos.precioVenta;
    this.productos.stock = productos.stock;
    this.productos.nuevasUnidades = productos.nuevasUnidades;
  }

  cleanFormData(){
    this.producto2.id = 0;
    this.producto2.codigo = "";
    this.producto2.imgUrl = "";
    this.producto2.titulo = "";
    this.producto2.autor = "";
    this.producto2.editorial = "";
    this.producto2.capitulo = "";
    this.producto2.proveedor = "";
    this.producto2.fechaCompra = "";
    this.producto2.nuevasUnidades = 0;
    this.producto2.stock = 0;
    this.producto2.precioCosto = 0;
    this.producto2.precioVenta = 2;
  }

}
