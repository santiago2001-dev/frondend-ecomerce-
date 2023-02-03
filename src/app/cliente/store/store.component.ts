import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { busqueda, producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import swal from 'sweetalert2';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit {
  listProduct : producto[] = []
  searchForm : FormGroup

  constructor(
    private router : Router,
    private serviceProdd : ProductosService,
     private fb : FormBuilder
  ) {
    this.searchForm = this.fb.group({
      busqueda : ['',Validators.required]
    })
   }

  ngOnInit(): void {
    this.getproduct()
  }

  getproduct(){
    const busqueda : busqueda = {
      busqueda : this.searchForm.get('busqueda')?.value
    }
    
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

      if(this.searchForm.valid){
        console.log("hoka")
        this.serviceProdd.search(busqueda).subscribe(
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

}
