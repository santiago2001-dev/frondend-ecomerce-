import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      
      submenu:[
        {titulo : 'Usuarios',url : 'dashboard/usuarios',icono : 'fa fa-users'},
        {titulo : 'Productos',url : 'dashboard/productos',icono : 'fa-solid fa-cart-shopping'},
        {titulo : 'Ventas',url : 'dashboard/ventas',icono : 'fa-solid fa-money-bill-1-wave'},
      ]
    }
  ]
}
