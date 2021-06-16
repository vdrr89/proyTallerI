import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  menu = [
    {
      id:"home",
      nombre: '',
      icon:'bi bi-house-fill',
      link:"/"
    },
    {
      id:"productos",
      nombre: 'Productos',
      icon:'',
      link:"/productos"
    },
    {
      id:"gestion",
      nombre: '',
      icon:'bi bi-kanban-fill',
      link:"/gestion/productos"
    },
    {
      id:"caja",
      nombre: '',
      icon:'bi bi-cart-fill',
      link:"/caja"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
