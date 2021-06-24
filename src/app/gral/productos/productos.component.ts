import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  noHay = "No hay productos";
  
  prod: Productos[] = []; 
  
  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(response => {
      console.log("productos cards response: ", response);
      this.prod = response;
    })
  }

}
