import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ProductosComponent } from './productos/productos.component';
import { CajaComponent } from './caja/caja.component';
import { GestionproductosComponent } from './gestionproductos/gestionproductos.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewUserComponent } from './login/new-user/new-user.component';
import { CrearproductoComponent } from './gestionproductos/crearproducto/crearproducto.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    CajaComponent,
    GestionproductosComponent,
    HomeComponent,
    LoginComponent,
    NewUserComponent,
    CrearproductoComponent
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
