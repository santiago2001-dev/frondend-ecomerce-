import { Injectable } from '@angular/core';
import {environment} from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import decode from 'jwt-decode';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { login } from '../models/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  server  = environment.servidor
  public token : String |any;
  tokenDes : String |any

  constructor(
    private http : HttpClient,
    private jwHelper : JwtHelperService
  ) { }

  login(credenciales : login):Observable<any>{
   let url = `${this.server}login`
    return this.http.post(url,credenciales)
    
  }

  isLoggin():boolean{
    this.token = localStorage.getItem('token');
    if(this.jwHelper.isTokenExpired(this.token) || !localStorage.getItem('token')){
      return false

    }
    return true
  }

  isPermis():boolean{
    this.token = localStorage.getItem('token');
    this.tokenDes = decode(this.token);
    const {typeUser} = this.tokenDes;
    if(!this.isLoggin || typeUser !=='admin'){
      return false
    }
    return true
  }
}
