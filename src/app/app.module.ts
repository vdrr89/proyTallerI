import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//comun
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
//gestion
import { GestionComponent } from './gestion/gestion.component';
import { GestionTabsComponent } from './gestion/gestion-tabs/gestion-tabs.component';
import { GestionproductosComponent } from './gestion/gestionproductos/gestionproductos.component';
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';
import { CrearProductoComponent } from './gestion/gestionproductos/crear-producto/crear-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CajaComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    BreadcrumbComponent,
    GestionComponent,
    GestionproductosComponent,
    GestionTabsComponent,
    GestionUsuariosComponent,
    CrearProductoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //sirve para hacer que los formularios anden con el ngModel
    ReactiveFormsModule // este y el de arriba, verificar e import de la carpeta @angular/forms
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
