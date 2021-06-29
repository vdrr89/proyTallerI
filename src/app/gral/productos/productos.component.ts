import { Component, Input, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
 
export class ProductosComponent implements OnInit {

  prod: Productos[] = [];
  backup: Productos[] = [];
  productos:Productos = {
    id:"",
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

  @Input() products:Productos = new Productos();


  constructor(private _ProductosService: ProductosService) { }

// constructor(){}

  ngOnInit(): void {
    this._ProductosService.getProductos().subscribe(response => {
      console.log("productos component response: ", response);
      this.prod = response;
      this.backup = this.prod;
    })
  }

}
