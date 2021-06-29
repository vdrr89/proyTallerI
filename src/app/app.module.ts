import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

//servicios
import { BreadcrumbService } from './gral/breadcrumb/breadcrumb.service';
import { ProductosService } from './servicios/productos.service';
import { UsuariosService } from './servicios/usuarios.service';
//GRAL
import { HomeComponent } from './gral/home/home.component';
import { NavBarComponent } from './gral/nav-bar/nav-bar.component';
import { BreadcrumbComponent } from './gral/breadcrumb/breadcrumb.component';
import { ProductosCarouselComponent } from './gral/home/productos-carousel/productos-carousel.component';
import { CajaComponent } from './gral/caja/caja.component';
import { FooterComponent } from './gral/footer/footer.component';
//.. productos
import { ProductosComponent } from './gral/productos/productos.component';
import { ProductoCardComponent } from './gral/productos/producto-card/producto-card.component';
import { ProductosFiltroComponent } from './gral/productos/productos-filtro/productos-filtro.component';
import { ProductoDetalleComponent } from './gral/productos/producto-detalle/producto-detalle.component';
//.. users
import { LoginComponent } from './gral/login/login.component';
import { LoginTabsComponent } from './gral/login/login-tabs/login-tabs.component';
import { NewUserComponent } from './gral/login/new-user/new-user.component';
import { NewUserTabsComponent } from './gral/login/new-user/new-user-tabs/new-user-tabs.component'
//GESTION 
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

@NgModule({
  declarations: [ // componentes
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
    CrearUsuarioComponent,
    FooterComponent,
    ProductosCarouselComponent,
    ProductoDetalleComponent,
    ProductosFiltroComponent,
    ProductoCardComponent
  ],
  imports: [  //modules
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [ // servicios
    BreadcrumbService, 
    ProductosService, 
    UsuariosService
  ], 
  bootstrap: [AppComponent]
})
export class AppModule { }
