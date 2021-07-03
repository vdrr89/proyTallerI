import { Component, OnInit } from '@angular/core';
import { ProductosService } from 'src/app/servicios/productos.service';
import { Productos } from 'src/app/clases/productos';

@Component({
  selector: 'app-product-filter',
  templateUrl: './product-filter.component.html',
  styleUrls: ['./product-filter.component.css']
})
export class ProductFilterComponent implements OnInit {

  filterDropdown = false;
  priceOptions = false;

  productos2: Productos[] = [];
  backup: Productos [] = [];

  searchInput:any = "";

  codigo = "";
  titulo = "";
  autor = "";
  editorial = "";
  precioMin = 0;
  precioMax = 0;

  constructor(
    private _productosServicios: ProductosService, 
    ) { }

  ngOnInit(): void {
    this._productosServicios.getProductos().subscribe(response => {
      console.log("new product filter ngOnInit response: ", response);
      this.productos2 = response;
      this.backup = this.productos2;
    })
  }

  // SHOW OR HIDE FILTER OPTIONS
  showFilter(){
    this.filterDropdown = !this.filterDropdown;
  }

  openPriceOptions(){
    this.priceOptions = !this.priceOptions;
  }

  // FILTER FUNCTIONS 
  filterByAll(){
    if (this.searchInput != "") {
      this.filterByCode();
    }; 
    
    if (this.searchInput != "") {
      this.filterByTitle();
    }; 
    
    if (this.searchInput != "") {
      this.filterByAutor();
    }; 
    
    if (this.searchInput != "") {
      this.filterByEditorial();
    }; 
    
    if (this.searchInput != "") {
      this.filterByBothPrices();
    }; 
    
    if (this.searchInput != "") {
      this.filterByMinPrice();
    }; 
    
    if (this.searchInput != "") {
      this.filterByMaxPrice();
    }
  }

  filterByCode(){
    let productosFiltrados = this.productos2.filter(producto =>{
      return producto.codigo === this.codigo;
    });
    this.productos2 = productosFiltrados;
    console.log("filter() productosFiltrados code: ", productosFiltrados)
  }

  filterByTitle(){
    let productosFiltrados = this.productos2.filter(producto =>{
      return producto.titulo === this.titulo;
    });
    this.productos2 = productosFiltrados;
    console.log("filterByTitle() ", productosFiltrados);
  };

  filterByAutor(){
    let productosFiltrados = this.productos2.filter(producto =>{
      return producto.autor === this.autor;
    });
    this.productos2 = productosFiltrados;
    console.log("filterByAutor() ", productosFiltrados);
  }

  filterByEditorial(){
    let productosFiltrados = this.productos2.filter(producto =>{
      return producto.editorial === this.editorial;
    });
    this.productos2 = productosFiltrados;
    console.log("filteredByEditorial() ", productosFiltrados);
  }

  filterByBothPrices(){
    if(this.precioMin > 0 && this.precioMax > 0){
      let productosFiltrados = this.productos2.filter(producto=>{
        return producto.precioVenta >= this.precioMin && this.precioMax <= this.precioMax;
      });
      this.productos2 = productosFiltrados;
      console.log("filterByBothPrices ", productosFiltrados);
    }
  }

  filterByMinPrice(){
    if(this.precioMin > 0){
      let productosFiltrados = this.productos2.filter(producto=>{
        return producto.precioVenta >= this.precioMin;
      });
      this.productos2 = productosFiltrados;
      console.log("filterByMinPrice() ", productosFiltrados);
    }
  }

  filterByMaxPrice(){
    if(this.precioMax > 0){
      let productosFiltrados = this.productos2.filter(producto=>{
        return producto.precioVenta <= this.precioMax;
      });
      this.productos2 = productosFiltrados;
      console.log("filterByMaxPrice ", productosFiltrados);
    }
  }

cleanFilter(){
  this.codigo = "";
  this.titulo = "";
  this.autor = "";
  this.editorial = "";
  this.precioMin = 0;
  this.precioMax = 0;
  this.productos2 = this.backup;
}

}
