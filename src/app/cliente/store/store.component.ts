import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  listProduct : producto[] = []

  constructor(
    private router : Router,
    private serviceProdd : ProductosService
  ) { }

  ngOnInit(): void {
    this.getproduct()
  }
  getproduct(){

    this.serviceProdd.getAllProduct().subscribe(
      data=>{
        this.listProduct = data

      },error=>{
        swal.fire({
          icon: 'error',
          title: error,
        
        })
      }
    
      )
  }
}
