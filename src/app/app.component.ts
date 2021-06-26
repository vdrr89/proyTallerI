import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; //agregar import
import { ProductosService } from './servicios/productos.service'; //agregar imports servicios
import { UsuariosService } from './servicios/usuarios.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ''; 

  constructor(private route: Router,private _productoService: ProductosService, private _usuarioService: UsuariosService) {}

  ngOnInit(): void { //agregar acá
    this._productoService.getProductos().subscribe((response:any) => {
      console.log(response);
    });
    this._usuarioService.getUsuarios().subscribe((response:any) => {
      console.log(response);
    })
  }

}
