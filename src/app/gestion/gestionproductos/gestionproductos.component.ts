import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos'; 
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-gestionproductos',
  templateUrl: './gestionproductos.component.html',
  styleUrls: ['./gestionproductos.component.css']
})
export class GestionproductosComponent implements OnInit {

  prod: Productos[] = []; // en el cod de pedro no tiene el último = []e igual le funciona
  productos:Productos = { //inicializados los del json
    cod:"",
    titulo:"",
    autor:"",
    editorial:"",
    capitulo:"",
    proveedor:"",
    fechaCompra:"",
    stock:0,
    precioCosto:0,
    precioVenta:0
  }
  

  tableTitle = [ //fijo solo título
    {title: "cod"},
    {title: "Título"},
    {title: "Autor"},
    {title: "Editorial"},
    {title: "Cap"},
    {title: "Vendedor"},
    {title: "Fecha Compra"},
    {title: "Stock"},
    {title: "$ Costo"},
    {title: "$ Venta"}
  ]

  constructor(private _productosService: ProductosService) { } 

  ngOnInit(): void { 
    this._productosService.getProductos().subscribe((response:any) => {
      this.prod = response;
      console.log("prod response: ", response);
    })
  }

  //AGREGAR
  submit(event:any){ //ese any está distinto al de prof, xq sino me da error
    event.preventDefault();
    if (this.productos.cod === ""){
      this._productosService.insertarProductos(this.productos).subscribe((response:any) => {
        console.log(response);
        this.prod.push(response);
      })
    } else {
      this._productosService.actualizarProductos(this.productos).subscribe((response:any) => {
        console.log(response);
        this.prod.map((item:Productos)=>{
          if(item.cod === this.productos.cod){
            item.titulo = this.productos.titulo;
            item.autor = this.productos.autor;
            item.capitulo = this.productos.capitulo;
            item.editorial = this.productos.editorial;
            item.proveedor = this.productos.proveedor;
            item.fechaCompra = this.productos.fechaCompra;
            item.stock = this.productos.stock;
            item.precioCosto = this.productos.precioCosto;
            item.precioVenta = this.productos.precioVenta;
          }
          return item;
        })
        //acá irían los msjs de que se completó correctamente o incorr con this.funct.subfunct = true ó false
      })
    }
  }

//acá iría el evento onChange que va con usuarios admin o cliente... 

//UPDATE
update(productos:any){
  this.productos.cod = productos.cod;
  this.productos.titulo = productos.titulo;
  this.productos.autor = productos.autor;
  this.productos.capitulo = productos.capitulo;
  this.productos.editorial = productos.editorial;
  this.productos.proveedor = productos.proveedor;
  this.productos.precioCosto = productos.precioCosto;
  this.productos.precioVenta = productos.precioVenta;
  this.productos.stock = productos.Stock;
}

}
