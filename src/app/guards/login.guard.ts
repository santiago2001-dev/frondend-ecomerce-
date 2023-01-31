import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {LoginService} from 'src/app/services/login.service'
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
constructor(
  private loginsev  : LoginService,
  private router : Router

){

}
canActivate():boolean {
  if(!this.loginsev.isLoggin()){
    swal.fire({
      icon: 'error',
      title: 'debes iniciar sesion primero',
  })
  this.router.navigate(['/login'])
  return false
  }
  return true
}
  
}
