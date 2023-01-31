import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {userAdm} from 'src/app/models/user'
import{UsuariosService} from 'src/app/services/usuarios.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {
  listUsers :userAdm [] = []

  constructor(
    private userServ : UsuariosService,
    private router :Router
  ) { }

  ngOnInit(): void {
    this.getUsers()
  }
  getUsers(){
    this.userServ.getAllUsers().subscribe(
      data=>{
        this.listUsers = data

      },error=>{
        swal.fire({
          icon: 'error',
          title: error.error,
        
        })
      }
    )

  }

  deleteUser(id : any){
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

        this.userServ.deleteUser(id).subscribe(
          data=>{
          swalWithBootstrapButtons.fire(
          'producto eliminado!',
          'el usuario ha sido eliminado correctamente',
          'success'
        )
        this.router.navigate(['/dashboard/usuarios']); //redirección
        this.getUsers()

      },error=>{
        swal.fire({
          icon: 'error',
          title: error.error,
        
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
