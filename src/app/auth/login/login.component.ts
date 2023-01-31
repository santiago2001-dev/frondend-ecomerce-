import { Component, OnInit } from '@angular/core';
import {LoginService} from 'src/app/services/login.service'
import swal from 'sweetalert2';
import {login} from  'src/app/models/login'
import { DefaultValueAccessor, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm : FormGroup
  constructor(
    private router : Router,
    private loginServ : LoginService,
    private fb : FormBuilder
  ) {
    this.loginForm = this.fb.group({
      correo:['',[Validators.required,Validators.email]],
      pass:['',Validators.required]
    })
   }

  ngOnInit(): void {
  }
  autenticacion(){
    if(this.loginForm.invalid){
      swal.fire({
        icon: 'error',
        title: 'los campos son obligatorios',
      
      })
  }else{
    const credenciales : login = {
      email : this.loginForm.get('correo')?.value,
      pass : this.loginForm.get('pass')?.value
    }
    this.loginServ.login(credenciales).subscribe(
      (data : any)=>{
        localStorage.setItem('token',data.token);
        if(!this.loginServ.isPermis()){
          this.router.navigate(['/dashboard/store'])
          
        }else{
           this.router.navigate(['/dashboard'])
         
        }
        


      },error=>{
        swal.fire({
          icon: 'error',
          title: error.error,
        
        })
      }
    )

  }
}
 registro(){
  this.router.navigate(['register'])
 }
}
