import { NgPluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProductosCarouselComponent } from '../home/productos-carousel/productos-carousel.component';
import { ProductosComponent } from '../productos/productos.component';
// import { ProductosService } from './servicios/productos.service'; //esto lo tengo que importar acá?

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  CartTitle = [
    {title: "Titulo"},
    {title: "Unidades"},
    {title: "$ c/u"},
    {title: "$ Tot"}
  ]

  CartContent = [
    {producto: ""}
  ]

  CartFooter = [
    {footer: "Total"},
    {footer: 'montoTotal'}
  ]

  montoTotal = 0;

  // esto tiene que ir acá o va en el servicio?
  producto: string[] = []
  carritoProducto: any = []

/* 
DETALLE CARRITO: 

  img
  nombre producto
  unidades
  - input + (cambiar unidades) | if click btn+ => (input) +1
  monto unidad | traer de sessionStorage (input)
  monto total | = unidades * monto c/u
  delete all product | sessionStorage delete all item

FOOTER CARRITO: 

  "total"
  monto total | = sum(montos totales)
  delete all cart | sessionStorage delete

*/

  addCart(producto: ProductosComponent){ // viene del json? lo saco de las clases / del ts de un componente?
  sessionStorage.setItem("producto",JSON.stringify(producto)) //

}

  constructor() { } //serviciosaca, funcionaes ang

  ngOnInit(): void { //solo renderear cosas del componente 

}

}