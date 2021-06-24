import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos'; 
import { ProductosService } from 'src/app/servicios/productos.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

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
  

  tableTitle = [ //fijo solo título
    {title: "cod"},
    {title: "imgUrl"},
    {title: "Título"},
    {title: "Autor"},
    {title: "Editorial"},
    {title: "Cap"},
    {title: "Vendedor"},
    {title: "Fecha Compra"},
    {title: "Stock"},
    {title: "$ Costo"},
    {title: "$ Venta"}
  ]

  constructor(private _productosService: ProductosService, private _router: Router, private _activatedRoute: ActivatedRoute) { } 

  ngOnInit(): void { 
    this._productosService.getProductos().subscribe(response =>{
      this.prod = response;
      console.log("prod response: ", response);
    })
  }
 
//EDITAR PROD
update(productos:Productos){
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

//ELIMINAR
// eliminarProductos(id: any){
//   this._productosService.addProductos(codigo).subscribe((response:any)=>{
//     console.log(response)
//     const newItems = this.productos.filter((item:any)=>{
//       return item.id !== codigo
//     });
//     this.productos = newItems;
//   })
//   }

}
