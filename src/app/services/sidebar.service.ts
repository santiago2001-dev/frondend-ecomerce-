import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu:any[]=[
    {
      titulo : 'Dashboard',
      icono : 'nav-icon fas fa-tachometer-alt',
      submenu:[
        {titulo : 'Usuarios',url : 'usuarios',icono : 'fa fa-users'},
        {titulo : 'Productos',url : 'productos',icono : 'fa-solid fa-cart-shopping'},
        {titulo : 'Ventas',url : 'ventas',icono : 'fa-solid fa-money-bill-1-wave'},
        {titulo : 'Tienda',url : 'store',icono : 'fa fa-solid fa-store'}
      ]
    }
  ]
}
