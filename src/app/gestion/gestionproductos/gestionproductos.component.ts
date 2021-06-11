import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  tableTitle = {
    Ides1: "cod",
  
    Articulo1: "Título",
    Articulo2: "Autor",
    Articulo3: "Editor",
    Articulo4: "Cap",
    
    Comercial1: "Vendedor",
    Comercial2: "Fecha Compra",
    Comercial3: "Stock",
    Comercial4: "$ Costo",
    Comercial5: "$ Venta"
  }
    
  
    infIdes = {
      code: "1"
    }
    
    infArticulo = {
      titulo: "2",
      autor: "h",
      editorial: "y",
      cap: "d"
    }
    
    infComercial = {
      proveedor: "y",
      fechaCompra: "m", // cambiar a fecha cuanto antes
      nuevasUnidades: "7",
      precioCosto: "6",
      precioVenta: "5"
    }
  

  constructor() { }

  ngOnInit(): void {
  }

}
