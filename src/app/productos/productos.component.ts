import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  noHay = "No hay productos";

  data = [
    {
      title:"uno",
      description: "acá una no tan larga descripción de lo que es",
      price: 0
    },
    {
      title:"dos",
      description: "acá una tan larga descripción de lo que es",
      price: 0
    },
    {
      title:"tres",
      description: "una no tan larga descripción de lo que es",
      price: 0
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
