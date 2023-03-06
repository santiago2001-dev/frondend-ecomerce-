import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { StoreComponent } from './store/store.component';
import { CompraComponent } from './compra/compra.component';
import { LoginGuard } from '../guards/login.guard';
import { VentasComponent } from '../pages/ventas/ventas.component';
import { PagoComponent } from './pago/pago.component';
import { PagoSuperiorComponent } from './pago-superior/pago-superior.component';
import { RegistroComprasComponent } from './registro-compras/registro-compras.component';
import { HomeComponent } from './home/home.component';

const routes : Routes=[
  {path: 'home',component:ClienteComponent,
  children: [
    {path:'store',component: StoreComponent,data:{titulo: 'store'}},
    {path :'pago/:tipoPrenda/:value',component : PagoComponent,canActivate :[LoginGuard],data:{titulo:'pago'}},
    {path :'pagoSup/:tipoPrenda/:value',component : PagoSuperiorComponent,canActivate :[LoginGuard],data:{titulo:'pago'}},
    {path :'compras/:id',component : CompraComponent,canActivate :[LoginGuard],data:{titulo:'product'}},
    {path :'registro-compras',component : RegistroComprasComponent,canActivate :[LoginGuard],data:{titulo:'product'}},
    {path :'g',component : HomeComponent,data:{titulo:'home'}},

  ]  
}
] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports :[
    RouterModule
  ]
})
export class ClienteRoutingModule { }
