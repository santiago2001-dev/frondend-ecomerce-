import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { userCli } from 'src/app/models/user';
import swal from 'sweetalert2';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm : FormGroup

  constructor(
    private router :Router ,
    private fb : FormBuilder,
    private registroServ : UsuariosService
  ) { 
    this.registerForm = this.fb.group({
      correo:['',[Validators.required,Validators.email]],
      pass:['',Validators.required],
      document:['',Validators.required],
      names:['',Validators.required],


    })
  }

  ngOnInit(): void {
  }

  registro(){
    if(this.registerForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    }else{
      const user : userCli={
        names: this.registerForm.get('names')?.value,
        email : this.registerForm.get('correo')?.value,
        pass :this.registerForm.get('pass')?.value,
        document : this.registerForm.get('document')?.value 
      }
      this.registroServ.crearteUserCli(user).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Registro realizado de fomra correcta',
            showConfirmButton: false,
            timer: 1500
          })

          this.router.navigate(['/login'])

        },error=>{
          console.log(error)
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        }
      )
    }
  }
}
