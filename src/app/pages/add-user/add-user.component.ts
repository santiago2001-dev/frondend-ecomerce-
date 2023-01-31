import { Component, OnInit } from '@angular/core';
import { userIn } from 'src/app/models/user';
import { UsuariosService } from 'src/app/services/usuarios.service';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  userForm :  FormGroup;
  Titulo = 'crear usuario'
  Id  : String | null ; 
  
  constructor(
    private router : Router,
    private userSer : UsuariosService,
    private aRouter : ActivatedRoute,
    private fb : FormBuilder
  ) { 
    this.userForm = this.fb.group({
      correo:['',[Validators.required,Validators.email]],
      pass:['',Validators.required],
      document:['',Validators.required],
      names:['',Validators.required],
      typeUser:['',Validators.required]

    })

    this.Id =this.aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getValues()
  }


  addUser(){
    if(this.userForm.invalid){
 
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
    }else{
    const user : userIn ={
      names : this.userForm.get('names')?.value,
      email : this.userForm.get('correo')?.value,
      typeUser : this.userForm.get('typeUser')?.value,
      pass : this.userForm.get('pass')?.value,
      document : this.userForm.get('document')?.value,

    }
    if(this.Id !== null){
      this.userSer.updateUser(this.Id,user).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario agregado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/dashboard/usuarios']);


        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        }
      )

    }else{
      this.userSer.crearteUserAdm(user).subscribe(
        data=>{
          swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuario actualizado correctamente',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigate(['/dashboard/usuarios']);


        },error=>{
          swal.fire({
            icon: 'error',
            title: error.error,
          
          })
        }
      )
    }
    }

  }
 
 
 
 
 
  getValues(){
    if(this.Id !== null){

      this.Titulo = " actualizar usuario";
      this.userSer.getUsersById(this.Id).subscribe(
        data=>{
          this.userForm.patchValue({
            names: data[0].names,
            pass : data[0].pass,
            correo : data[0].email,
            document : data[0].document,
            typeUser : data[0].typeUser
          })
        }
      )
    }

  }
}
