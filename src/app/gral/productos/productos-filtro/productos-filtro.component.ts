import { Component, OnInit } from '@angular/core';
import { Productos } from 'src/app/clases/productos';
import { ProductosService } from 'src/app/servicios/productos.service';

@Component({
  selector: 'app-productos-filtro',
  templateUrl: './productos-filtro.component.html',
  styleUrls: ['./productos-filtro.component.css']
})
export class ProductosFiltroComponent implements OnInit {

  hideDiv = false;

  productos:Productos = { //usado en todos los filtros
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
  productos2: Productos[] = []; //usado en todos los filtros
  backup: Productos[] = []; // usado en ngOnInit y limpiarFiltro()

  codigo = "";
  titulo = "";
  autor = "";
  editorial = "";
  precioMin = 0;
  precioMax = 0;

  constructor(private _productosService: ProductosService) { }

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

    // filtra en cada input, no muestra en lista el resulta pero si en consola, no funciona para el buscar unico
    buscar(){
      if(this.codigo.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.codigo === this.codigo;
        });
        console.log("productosFiltrados codigo: ", productosFiltrados);
        this.productos2 = productosFiltrados;
      };

      if(this.titulo.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.titulo === this.titulo;
        });
        console.log("productosFiltrados titulo: ", productosFiltrados);
        this.productos2 = productosFiltrados;
      };

      if(this.autor.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.autor === this.autor;
        });
        console.log("productosFiltrados autor: ", productosFiltrados);
        this.productos2 = productosFiltrados;
      };

      if(this.editorial.length > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.editorial === this.editorial;
        });
        console.log("productosFiltrados editorial: ", productosFiltrados);
        this.productos2 = productosFiltrados;
      };

      if(this.precioMin > 0 && this.precioMax > 0){
        let productosFiltrados = this.productos2.filter(producto => {
          return producto.precioVenta >= this.precioMin && this.precioMax <= this.precioMax;
        });
        console.log("productosFiltrados precioVenta: ", productosFiltrados);
        this.productos2 = productosFiltrados;
      }
    }

    showAllAgain(){
      if(this.codigo.length === 0){
        this.productos2 = this.backup;
      };
      
      if(this.titulo.length === 0){
        this.productos2 = this.backup;
      };

      if(this.autor.length === 0){
        this.productos2 = this.backup;
      };

      if(this.editorial.length === 0){
        this.productos2 = this.backup;
      };

      if(this.precioMin === 0){
        this.productos2 = this.backup;
      };

      if(this.precioMax === 0){
        this.productos2 = this.backup;
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


