import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//comun
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
 
//GRAL
import { HomeComponent } from './gral/home/home.component';
//.. productos
import { ProductosComponent } from './gral/productos/productos.component';
import { CajaComponent } from './gral/caja/caja.component'
//.. users
import { LoginComponent } from './gral/login/login.component';
import { LoginTabsComponent } from './gral/login/login-tabs/login-tabs.component';
import { NewUserComponent } from './gral/login/new-user/new-user.component';
import { NewUserTabsComponent } from './gral/login/new-user/new-user-tabs/new-user-tabs.component'
//GESTION
import { GestionModule } from './gestion/gestion.module';
import { GestionComponent } from './gestion/gestion.component';
import { GestionTabsComponent } from './gestion/gestion-tabs/gestion-tabs.component';
//.. productos
import { GestionProductosFiltroComponent } from './gestion/gestionproductos/gestion-productos-filtro/gestion-productos-filtro.component';
import { GestionproductosComponent } from './gestion/gestionproductos/gestionproductos.component';
import { CrearProductoComponent } from './gestion/gestionproductos/crear-producto/crear-producto.component';
//.. usuarios
import { GestionUsuariosFiltroComponent } from './gestion/gestion-usuarios/gestion-usuarios-filtro/gestion-usuarios-filtro.component';
import { GestionUsuariosComponent } from './gestion/gestion-usuarios/gestion-usuarios.component';
import { CrearUsuarioComponent } from './gestion/gestion-usuarios/crear-usuario/crear-usuario.component';
import { BreadcrumbService } from './breadcrumb/breadcrumb.service';

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
  imports: [ //acá van los módulos, ponerlos también en el import
    BrowserModule,
    AppRoutingModule,
    FormsModule, //sirve para hacer que los formularios anden con el ngModel
    ReactiveFormsModule, // este y el de arriba, verificar e import de la carpeta @angular/forms
    GestionModule
  ],
  providers: [BreadcrumbService], //aqui van los servicios
  bootstrap: [AppComponent]
})
export class AppModule { }
