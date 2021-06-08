import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {


  infIdes1 = "cod";

  infArticulo1 = "Título";
  infArticulo2 = "Autor";
  infArticulo3 = "Editor";
  infArticulo4 = "Cap";
  
  infComercial1 = "Vendedor";
  infComercial2 = "Fecha Compra";
  infComercial3 = "Stock";
  infComercial4 = "$ Costo";
  infComercial5 = "$ Venta";

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
