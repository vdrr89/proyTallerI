import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  tableTitle = [
    {title: "cod"},
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
  
  tableContent = [
    {content: "598"},
    {content: "Me Llamo"},
    {content: "Menganito"},
    {content: "Menanasia"},
    {content: "Cap.8 V.34"},
    {content: "Fulanito S.A."},
    {content: "08/10/1981"},
    {content: "999"},
    {content: "$6800"},
    {content: "$200"}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
