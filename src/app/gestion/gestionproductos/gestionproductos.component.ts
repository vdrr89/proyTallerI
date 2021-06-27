import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

import { ActivatedRoute } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  prod: Productos[] = [];
  backup: Productos[] = [];
  productos:Productos = {
    id: "",
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

  tableTitle = [ //estático solo título
    // {title: "id"},
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

  constructor(
    private _productosService: ProductosService,
    private _route: Router,
    private _activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(response =>{
      this.prod = response;
      console.log("prod response: ", response);
      this.backup = this.prod;
    })
  }

//GO TO EDITAR PRODUCTO
goToUpdate(productos:Productos){
  this._route.navigate(["/gestion/crearproducto",productos.id]);
}

//ELIMINAR PRODUCTO
delete(id: string){
  this._productosService.eliminarProductos(id).subscribe((response:any)=>{
    console.log("delete response: ", response);
    const newItems = this.prod.filter((item:any)=>{
      return item.id !== id;
    });
    this.prod = newItems;
  })
}

}
