import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crearproducto',
  templateUrl: './crearproducto.component.html',
  styleUrls: ['./crearproducto.component.css']
})
export class CrearproductoComponent implements OnInit {

  idi = 0;
  code = 0;

  titulo = "titulo";
  autor = "autor";
  editorial = "editorial";
  cap = "capitulo";

  proveedor = "proveedor";
  fechaCompra = "01/03/2021"
  nuevasUnidades = 0;
  precioCosto = 0;
  precioVenta = 0;

  clickHandler(e:any){
    e.preventDefault;
    console.log(this.idi);
    console.log(this.code);
    console.log(this.titulo);
    console.log(this.autor);
    console.log(this.editorial);
    console.log(this.cap);
    console.log(this.proveedor);
    console.log(this.fechaCompra);
    console.log(this.nuevasUnidades);
    console.log(this.precioCosto);
    console.log(this.precioVenta);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
