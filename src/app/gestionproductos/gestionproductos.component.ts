import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  id1 = "id";
  id2 = "cod";

  dat1 = "Título";
  dat2 = "Autor";
  dat3 = "Editor";
  dat4 = "Cap";
  
  inf1 = "Vendedor";
  inf2 = "Fecha Compra";
  inf3 = "Stock";
  inf4 = "$ Costo";
  inf5 = "$ Venta";

  constructor() { }

  ngOnInit(): void {
  }

}
