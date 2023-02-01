import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service'; 
import decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems ?: any[];
  public token : String |any;
  tokenDes : String |any
  name :string |any
  ocultar : boolean |any

  constructor(
    private siderbarser : SidebarService,
    private router : Router,
    private jwHelper : JwtHelperService

  ) { 
    this.menuItems = this.siderbarser.menu;
  }

  ngOnInit(): void {
   this.getnameUser()
  }

  logiout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  getnameUser(){
    this.token = localStorage.getItem('token');
    if(this.jwHelper.isTokenExpired(this.token) || !localStorage.getItem('token')){
      this.name = "bienvenido"
    }else{
    this.tokenDes = decode(this.token);
    const {names,typeUser} = this.tokenDes;
    this.name = names
    this.ocultar = true
    if(typeUser =="user"){
      this.ocultar = false
    } 
    }
     
  }

}
