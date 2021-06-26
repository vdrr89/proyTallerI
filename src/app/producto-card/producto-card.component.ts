import { Component, OnInit, Input } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Productos } from 'src/app/clases/productos';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  @Input() producto:Productos = new Productos();

  cantd = 0;
  cartProduct ={
    id:"",
    precio:0,
    titulo:"",
    cantidad:0,
    imgUrl:"",
    codigo:""
  }

  constructor() { }

  ngOnInit(): void {
  }

  addCart(producto:Productos){
    this.cartProduct.precio = producto.precioVenta;
    this.cartProduct.titulo = producto.titulo;
    this.cartProduct.cantidad = this.cantd;
    this.cartProduct.imgUrl = producto.imgUrl;
    this.cartProduct.codigo = producto.codigo;
    sessionStorage.setItem("producto"+producto.id,JSON.stringify(this.cartProduct));
    console.log("addCart", this.cartProduct);
  }

  plus(){
    this.cantd++;
    console.log("plus cantd", this.cantd);
  }

    less(){
    this.cantd = this.cantd > 0 ? this.cantd -1 : 0;
    console.log("less cantd", this.cantd);

  }

}
