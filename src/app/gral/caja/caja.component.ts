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

  cantidad:number = 0;
  total = 0;
  entregaCliente = 0;
  vuelto = 0;
  sobraOFalta = "Vuelto: "

  productos:any[] = [];
  productos2:Productos = {
    id: "",
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
  cartProduct:any = [];
  cartElotro:any[] = [];

  constructor() { }

  ngOnInit(): void {

    this.productos = Object.keys(sessionStorage);
    console.log(this.productos);
    this.productos.forEach((element:any) => {
    const item = sessionStorage.getItem(element);
    console.log("caja ngOnInit item: ", item);

      if(item != null){
        let obj = JSON.parse(item);
        this.cartProduct.push(JSON.parse(item));
        this.total += obj.cantidad*obj.precio;
        // console.log("ngOnInit total: ", this.total);
        // console.log("ngOnInit obj cantidad: ", obj.cantidad);
        // console.log("ngOnInit obj precio: ", obj.precio);
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
      element.cantidad++;
      this.total += element.precio;
      return element;
    } else {
      return element;
    }
  });
  this.cartProduct = temp;
}

less(producto:any){
  if(producto.cantidad === 1){
    let borrar = this.cartProduct.filter((element:any)=>{
      return element.id !== producto.id
    })
    this.total -= producto.precio;
    this.cartProduct = borrar;
  } else {
    let temp = this.cartProduct.map((element:any)=>{
      if(element.id === producto.id){
        element.cantidad--;
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
  this.total -= producto.cantidad*producto.precio;
}

}
