import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { SidebarService } from 'src/app/services/sidebar.service'; 
import decode from 'jwt-decode';

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

  constructor(
    private siderbarser : SidebarService,
    private router : Router
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
    this.tokenDes = decode(this.token);
    const {names} = this.tokenDes;
    this.name = names
  }

}
