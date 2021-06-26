import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos';

@Component({
  selector: 'app-caja',
  templateUrl: './caja.component.html',
  styleUrls: ['./caja.component.css']
})
export class CajaComponent implements OnInit {

  CartTitle = [ //fijo
    {title: "Titulo"},
    {title: "Unidades"},
    {title: "$ c/u"},
    {title: "$ Tot"}
  ]

  hideDiv = false;

  unidades = 0;
  total = 0;
  entregaCliente = 0;
  vuelto = 0;
  sobraOFalta = "Vuelto: "

  productos:string[] = [];
  productos2:Productos = { 
    id: 0,
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
  };
  CartContent:any = [];
  cartProduct:any[] = [];

  constructor() { } 

  ngOnInit(): void {  

    //trae del sessionStorage
    this.productos = Object.keys(sessionStorage);
    console.log(this.productos);
    this.productos.forEach((element:any) => {
      const item = sessionStorage.getItem(element);

      //agrega al carrito
      if(item != null){
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        this.total += obj.unidades*obj.precio
      }
    });
}

showDiv(){
  this.hideDiv = !this.hideDiv;
}

//hacer al presionar cada tecla en el input
calcularVuelto(){
  this.vuelto = this.entregaCliente - this.total;
  this.sobraOFalta = this.vuelto >= 0 ? "Vuelto: " : "Aún le falta: ";
}

plus(producto:any){
  let temp = this.cartProduct.map((element:any)=>{
    if (element.id === producto.id){
      element.unidades++;
      this.total += element.precio;
      return element;
    } else {
      return element;
    }
  });
  this.cartProduct = temp;
}

less(producto:any){
  if(producto.unidades === 1){
    let borrar = this.cartProduct.filter((element:any)=>{
      return element.id !== producto.id
    })
    this.total -= producto.precio;
    this.cartProduct = borrar;
  } else {
    let temp = this.cartProduct.map((element:any)=>{
      if(element.id === producto.id){
        element.unidades--;
        this.total -= element.precio;
        return element;
      } else {
        return element;
      }
    });
    this.cartProduct = temp;
  }
}

cancelar(){
  this.sobraOFalta = "Vuelto: "; 
  this.total = 0; 
  this.entregaCliente = 0;
  this.cartProduct = [];
  this.productos.forEach((el:any)=>{
    sessionStorage.removeItem(el);
  });
  this.productos = [];
}

deleteItem(producto:any){
  sessionStorage.removeItem("Producto: "+producto.id);
  const newItems = this.cartProduct.filter((item:any)=>{
    return item.id !== producto.id
  });
  this.cartProduct = newItems;
  this.total -= producto.unidades*producto.precio;
}

}
