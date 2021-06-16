import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
//comun
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { HomeComponent } from './home/home.component';
import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
//comun users
import { LoginComponent } from './login/login.component';
import { LoginTabsComponent } from './login/login-tabs/login-tabs.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { NewUserTabsComponent } from './login/new-user/new-user-tabs/new-user-tabs.component';
//gestion
import { GestionComponent } from './gestion/gestion.component';
import { GestionTabsComponent } from './gestion/gestion-tabs/gestion-tabs.component';
//gestion productos
import { GestionProductosFiltroComponent } from './gestion/gestionproductos/gestion-productos-filtro/gestion-productos-filtro.component';
import { GestionproductosComponent } from './gestion/gestionproductos/gestionproductos.component';
import { CrearProductoComponent } from './gestion/gestionproductos/crear-producto/crear-producto.component';
//gestion usuarios
import { GestionUsuariosFiltroComponent } from './gestion/gestion-usuarios/gestion-usuarios-filtro/gestion-usuarios-filtro.component';
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';
import { CrearUsuarioComponent } from './gestion/gestion-usuarios/crear-usuario/crear-usuario.component';

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
    GestionProductosFiltroComponent,
    GestionUsuariosFiltroComponent,
    LoginTabsComponent,
    NewUserTabsComponent,
    NavBarComponent,
    CrearUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //sirve para hacer que los formularios anden con el ngModel
    ReactiveFormsModule // este y el de arriba, verificar e import de la carpeta @angular/forms
  ],
  providers: [], //aqui van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
