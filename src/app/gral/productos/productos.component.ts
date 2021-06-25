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
   
   noHay = "No hay productos";
  
  prod: Productos[] = []; 
 
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

  ngOnInit(): void {
    this._productosService.getProductos().subscribe(response => {
      console.log("productos cards response: ", response);
      this.prod = response;
    })
  }

  // addCart(producto:Productos){
  //   this.cartProduct.precio = producto.precioVenta;
  //   this.cartProduct.titulo = producto.titulo;
  //   this.cartProduct.cantidad = this.cantd;
  //   this.cartProduct.imgUrl = producto.imgUrl;
  //   this.cartProduct.codigo = producto.codigo;
  //   sessionStorage.setItem("producto"+producto.id,JSON.stringify(this.cartProduct));
  // }

  plus(){
    this.cantd++;
  }

    less(){
    this.cantd = this.cantd > 0 ? this.cantd -1 : 0;
  }

}



//   products:Productos = {
//     id: 0,
//     codigo:"",
//     imgUrl:"",
//     titulo:"",
//     autor:"",
//     editorial:"",
//     capitulo:"",
//     proveedor:"",
//     fechaCompra:"",
//     nuevasUnidades:0,
//     stock:0,
//     precioCosto:0,
//     precioVenta:0
//   }


//   addCart(producto:Productos){
//     this.cartProduct.precio = producto.precioVenta;
//     this.cartProduct.titulo = producto.titulo;
//     this.cartProduct.cantidad = this.cantd;
//     this.cartProduct.imgUrl = producto.imgUrl;
//     this.cartProduct.codigo = producto.codigo;
//     sessionStorage.setItem("producto"+producto.id,JSON.stringify(this.cartProduct));
//   }

// }
