import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ClienteComponent } from './cliente.component';
import { StoreComponent } from './store/store.component';
import { CompraComponent } from './compra/compra.component';
import { LoginGuard } from '../guards/login.guard';

const routes : Routes=[
  {path: 'home',component:ClienteComponent,
  children: [
    {path:'store',component: StoreComponent},

    {path :'compras',component : CompraComponent,canActivate :[LoginGuard]},

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
