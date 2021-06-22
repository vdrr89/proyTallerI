import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos'; // primero importa la clase


@Component({
  selector: 'app-gestion-productos-filtro',
  templateUrl: './gestion-productos-filtro.component.html',
  styleUrls: ['./gestion-productos-filtro.component.css']
})
export class GestionProductosFiltroComponent implements OnInit {

productos:Productos = { //primero inicializar acá despues hacer funcion abajo
    
      cod:"",
      titulo:"",
      autor:"",
      editorial:"",
      capitulo:"",
      proveedor:"",
      fechaCompra:"",
      stock:0,
      precioCosto:0,
      precioVenta:0
    }

  constructor() { }

  ngOnInit(): void {
    
  }
}

// filtrar(){
//   console.log(Productos.cod);
// }
