import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import {VentasComponent} from './ventas/ventas.component'
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AddUserComponent } from './add-user/add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';

@NgModule({
  declarations: [
    
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent,
    AddProdComponent,
    AddUserComponent,
    UpdateproductComponent,
   PagesComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports : [
    DashboardComponent,
    UsuariosComponent,
    ProductosComponent,
    VentasComponent,
    AddProdComponent,
    AddUserComponent,
    UpdateproductComponent,
  ]
})
export class PagesModule { }
