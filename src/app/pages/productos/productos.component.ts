import { Component, OnInit } from '@angular/core';
import {ProductosService} from 'src/app/services/productos.service'
import {producto} from 'src/app/models/productos'
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
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


  deleteProduct(id : any){
    const swalWithBootstrapButtons = swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })
    
    swalWithBootstrapButtons.fire({
      title: '¿estás seguro?',
      text: "Una vez eiminado el contacto no podrá ser recuperado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'si, deseo eliminarlo',
      cancelButtonText: 'No, cancelar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {

        this.serviceProdd.deleteProduct(id).subscribe(
          data=>{
          swalWithBootstrapButtons.fire(
          'producto eliminado!',
          'el producto ha sido eliminado correctamente',
          'success'
        )
        this.router.navigate(['/dashboard/productos']); //redirección
        this.getproduct()

      },error=>{
        swal.fire({
          icon: 'error',
          title: 'algo salio mal intenta de nuevo ',
        
        })


      }
      )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado',
          'operación cancelada',
          'error'
        )
      }
    })

}
}
