import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-gestion-productos-filtro',
  templateUrl: './gestion-productos-filtro.component.html',
  styleUrls: ['./gestion-productos-filtro.component.css']
})
export class GestionProductosFiltroComponent implements OnInit {

  hideDiv = false;

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
  };
  productos2: Productos[] = [];
  backup: Productos[] = [];

  codigo = "";
  titulo = "";
  autor = "";
  editorial = "";
  precioMin = 0;
  precioMax = 0;

  constructor(
    private _productosService: ProductosService,
    ) { }

    ngOnInit(): void {
      this._productosService.getProductos().subscribe(response => {
        console.log("filtro productos response: ", response);
        this.productos2 = response;
        this.backup = this.productos2;
      })
    }

    showDiv(){
      this.hideDiv = !this.hideDiv;
      this.limpiarFiltro();
    }

    keyupSearch(event:any){
      this.buscar();
    }

    buscar(){
      if(this.codigo.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.codigo === this.codigo;
        });
        this.productos2 = productosFiltrados;
        console.log("buscar() productosFiltrados codigo: ", productosFiltrados);
      };

      if(this.titulo.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.titulo === this.titulo;
        });
        this.productos2 = productosFiltrados;
        console.log("buscar() productosFiltrados titulo: ", productosFiltrados);
      };

      if(this.autor.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.autor === this.autor;
        });
        this.productos2 = productosFiltrados;
        console.log("buscar() productosFiltrados autor: ", productosFiltrados);
      };

      if(this.editorial.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.editorial === this.editorial;
        });
        this.productos2 = productosFiltrados;
        console.log("buscar() productosFiltrados editorial: ", productosFiltrados);
      };

      if(this.precioMin > 0 && this.precioMax > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.precioVenta >= this.precioMin && this.precioMax <= this.precioMax;
        });
        this.productos2 = productosFiltrados;
        console.log("buscar() productosFiltrados precio: ", productosFiltrados);
      }
    }

    limpiarFiltro(){
      this.codigo = "";
      this.titulo = "";
      this.autor = "";
      this.editorial = "";
      this.precioMin = 0;
      this.precioMax = 0;
      this.productos2 = this.backup;
    }

  }


