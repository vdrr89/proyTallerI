import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from './servicios/productos.service';
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

  ngOnInit(): void { 
    this._productoService.getProductos().subscribe((response:any) => {
      console.log("app component ngOnInit prod: ",response);
    });
    this._usuarioService.getUsuarios().subscribe((response:any) => {
      console.log("app component ngOnInit usu: ", response);
    })
  }

}
