import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ProductosComponent } from './productos/productos.component';
import { VentasComponent } from './ventas/ventas.component';
import { RouterModule, Routes } from '@angular/router';
import { RolesGuard } from '../guards/roles.guard';
import { LoginGuard } from '../guards/login.guard';
import { AddProdComponent } from './add-prod/add-prod.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { StoreComponent } from './store/store.component';


const routes: Routes=[
  {path: 'dashboard',component:PagesComponent,
  children: [
    {path:'',component: DashboardComponent,data:{titulo:'Dashboard',expectRole :'admin'},canActivate :[ RolesGuard]},

    {path :'usuarios',component : UsuariosComponent,data:{titulo:'Usuarios',expectRole :'admin'},canActivate :[ RolesGuard]},
    {path:'add-user',component: AddUserComponent,data:{titulo : 'Agregar usuario',expectRole :'admin'},canActivate :[ RolesGuard]},
    {path:'update-user/:id',component: AddUserComponent,data:{titulo : 'Agregar usuario',expectRole :'admin'},canActivate :[ RolesGuard]},

    {path:'productos',component: ProductosComponent,data:{titulo:'Productos',expectRole :'admin'},canActivate :[ RolesGuard]},
    {path:'add-product',component: AddProdComponent,data:{titulo : 'Agregar producto',expectRole :'admin'},canActivate :[ RolesGuard]},
    {path:'update-product/:id',component: UpdateproductComponent,data:{titulo : 'Actualizar producto',expectRole :'admin'},canActivate :[ RolesGuard]},

    {path:'ventas',component: VentasComponent,data:{titulo:'Ventas',expectRole :'admin'},canActivate :[ RolesGuard]},

    {path:'store',component: StoreComponent,data:{titulo:'Tienda',expectRole :'user'}}
  ]  
}
]
@NgModule({
  
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
      RouterModule
  ]
})
export class PagesRoutngModule { }
