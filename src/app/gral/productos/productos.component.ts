import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})

export class ProductosComponent implements OnInit {

  @Input() producto:Productos = new Productos();
    
  prod: Productos[] = [];

  productos:Productos = {
    id:0,
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

  // productos2: Productos = new Productos();

  noHay = "No hay productos";
   
  cantd = 0;
  cartProduct ={
    id:"",
    precio:0,
    titulo:"",
    cantidad:0,
    imgUrl:"",
    codigo:""
  }
  
  constructor(private _productosService: ProductosService) { }

// constructor(){}

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(response => {
      console.log("productos ngOnInit response: ", response);
      this.prod = response;
    })
    console.log("prod", this.prod);
  } 

  addCart(producto:Productos){
    this.cartProduct.precio = this.productos.precioVenta;
    this.cartProduct.titulo = this.productos.titulo;
    this.cartProduct.cantidad = this.cantd;
    this.cartProduct.imgUrl = this.productos.imgUrl;
    this.cartProduct.codigo = this.productos.codigo;
    sessionStorage.setItem("producto"+this.productos.id,JSON.stringify(this.cartProduct));
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

  // deleteItem(producto:Productos){
  //   sessionStorage.removeItem("Producto: "+producto.id);
  //   console.log("item producto delete: ");
  //   const newItems = this.cartProduct.filter((item:any)=>{
  //     return item.id !== producto.id
  //   });
  //   this.cartProduct = newItems;
  // }


  //deleteItem
  deleteItem(producto:Productos){
    this.cartProduct.precio = 0;
    this.cartProduct.titulo = "";
    this.cartProduct.cantidad = 0;
    this.cartProduct.imgUrl = "";
    this.cartProduct.codigo = "";
    sessionStorage.removeItem("producto"+this.productos.id);
    console.log("deleteCart", this.cartProduct);
  }
}
