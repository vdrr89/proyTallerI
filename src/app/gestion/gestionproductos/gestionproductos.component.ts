import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  tableTitle = {
    Cod: "cod",
  
    Titulo: "Título",
    Autor: "Autor",
    Editorial: "Editorial",
    Cap: "Cap",
    
    Vendedor: "Vendedor",
    FechaCompra: "Fecha Compra",
    Stock: "Stock",
    PrecioCosto: "$ Costo",
    PrecioVenta: "$ Venta"
  }
    
  
  Ides = {
    code: "1"
  }
  
  Articulo = {
    titulo: "2",
    autor: "h",
    editorial: "y",
    cap: "d"
  }
  
  Comercial = {
    proveedor: "y",
    fechaCompra: "m", // cambiar a fecha cuanto antes
    stock: "7",
    precioCosto: "6",
    precioVenta: "5"
  }
  

  constructor() { }

  ngOnInit(): void {
  }

}
