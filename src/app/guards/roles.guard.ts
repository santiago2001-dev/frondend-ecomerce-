import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';
import swal from 'sweetalert2';
import decode from 'jwt-decode';


@Injectable({
  providedIn: 'root'
})
export class RolesGuard implements CanActivate {
  token :String|any
  tokenDes: String |any
  constructor(
    private authService : LoginService,
    private router : Router
  ){

  }

  canActivate(route : ActivatedRouteSnapshot):boolean{
    const expectRole  = route.data['expectRole'];
       this.token = localStorage.getItem('token');
          //desencriptar topken 
      this.tokenDes = decode(this.token);

    const {typeUser} = this.tokenDes;
    if(!this.authService.isPermis() || typeUser !== expectRole){
      swal.fire({
        icon: 'error',
        title: 'usuario no autorizado , por favor ingresa con una cuenta admistradora',
    })
    this.router.navigate(['/dashboard/store'])
      return false
    }

    return true;
 
 }
}


