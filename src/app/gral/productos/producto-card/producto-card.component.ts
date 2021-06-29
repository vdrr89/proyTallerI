import { Component, OnInit, Input } from '@angular/core';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-producto-card',
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent implements OnInit {

  @Input() producto:Productos = new Productos(); // este es el que va a producto-card component html / clase 14 01.20  

  prod: Productos[] = [];
  productos:Productos = {
    id:"",
    codigo:"",
    imgUrl:"",
    titulo:"",
    autor:"",
    editorial:"",
    capitulo:"",
    proveedor:"",
    fechaCompra:"",
    nuevasUnidades:0,
    stock:0,
    precioCosto:0,
    precioVenta:0
  }

  noHay = "No hay productos";

  cantd:number = 0;
  cartProduct ={
    id:"",
    precio:0,
    titulo:"",
    cantidad:0,
    imgUrl:"",
    codigo:""
  }

  constructor(private _productosService: ProductosService) { }

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(response => {
      console.log("productos ngOnInit response: ", response);
      this.prod = response;
    })
    console.log("prod", this.prod);
  }

  addCart(producto3:Productos){
    this.cartProduct.precio = producto3.precioVenta;
    this.cartProduct.titulo = producto3.titulo;
    this.cartProduct.cantidad = this.cantd;
    this.cartProduct.imgUrl = producto3.imgUrl;
    this.cartProduct.codigo = producto3.codigo;
    sessionStorage.setItem("producto"+producto3.id,JSON.stringify(this.cartProduct));
    this.limpiarInput();
    console.log("addCart cartProduct: ", this.cartProduct);
  }

  //hacer maquetación de configurar cuenta con receptor de favoritos
  addFavorites(producto4:Productos){
    this.cartProduct.precio = producto4.precioVenta;
    this.cartProduct.titulo = producto4.titulo;
    this.cartProduct.imgUrl = producto4.imgUrl;
    this.cartProduct.codigo = producto4.codigo;
    sessionStorage.setItem("producto"+producto4.id,JSON.stringify(this.cartProduct));
    console.log("addFavorites producto card component: ")
  }

  plus(){
    this.cantd++;
    console.log("plus cantd", this.cantd);
  }

  less(){
    this.cantd = this.cantd > 0 ? this.cantd -1 : 0;
    console.log("less cantd", this.cantd);
  }

  limpiarInput(){
    this.cantd = 0;
  }

  deleteItem(producto5:Productos){
    this.cartProduct.precio = producto5.precioVenta;
    this.cartProduct.titulo = producto5.titulo;
    this.cartProduct.cantidad = this.cantd = 0;
    this.cartProduct.imgUrl = producto5.imgUrl;
    this.cartProduct.codigo = producto5.codigo;
    sessionStorage.removeItem("producto"+this.producto.id);
    console.log("deleteCart", this.cartProduct);
  }

  deleteFavorite(producto4:Productos){
    this.cartProduct.precio = producto4.precioVenta;
    this.cartProduct.titulo = producto4.titulo;
    this.cartProduct.imgUrl = producto4.imgUrl;
    this.cartProduct.codigo = producto4.codigo;
    sessionStorage.removeItem("producto"+this.producto.id);
    console.log("deleteFavorite: ", this.cartProduct);
  }
}