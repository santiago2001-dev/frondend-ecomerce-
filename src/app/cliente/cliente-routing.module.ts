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
import { PagoPseComponent } from './pago-pse/pago-pse.component';
import { PagoPseSuperiorComponent } from './pago-pse-superior/pago-pse-superior.component';

const routes : Routes=[
  {path: 'home',component:ClienteComponent,
  children: [
    {path:'store',component: StoreComponent,data:{titulo: 'store'}},
    {path :'pago/:tipoPrenda/:value',component : PagoComponent,canActivate :[LoginGuard],data:{titulo:'pago'}},
    {path :'pagoPse/:tipoPrenda/:value',component : PagoPseComponent,canActivate :[LoginGuard],data:{titulo:'pago'}},

    {path :'pagoSupPse/:tipoPrenda/:value',component : PagoPseSuperiorComponent,canActivate :[LoginGuard],data:{titulo:'pago'}},
    
    {path :'compras/:id',component : CompraComponent,data:{titulo:'product'}},
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
