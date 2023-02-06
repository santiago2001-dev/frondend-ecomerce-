import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { infoPago,mdedidas } from 'src/app/models/pago';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PagoService } from 'src/app/services/pago.service';
@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {
pagoForm : FormGroup
tipoPrenda : string  |any
value : string | any

  constructor(
    private pagoServ : PagoService,
    private fb : FormBuilder,
    private router : Router,
    private aRouter : ActivatedRoute
  )
   {
     this.pagoForm = this.fb.group(
       {
         "docType": ['',Validators.required],
         "document": ['',[Validators.max(10), Validators.min(1)],Validators.required],
         "name": ['',Validators.required],
         "lastName": ['',Validators.required],
         "email": ['',[Validators.required,Validators.email]],
         "phone": ['',[Validators.max(10), Validators.min(1),Validators.required]],
         "city": ['',Validators.required],
         "address": ['',Validators.required],
         "medidaUno" :['',Validators.required],
         "medidaDos": ['',Validators.required],
         "medidaTres": ['',Validators.required],
         "medidaCuatro": ['',Validators.required],
       }
     ) 
    this.tipoPrenda = this.aRouter.snapshot.paramMap.get('tipoPrenda')
    this.value = this.aRouter.snapshot.paramMap.get('value')

   
  }

  ngOnInit(): void {
    console.log(this.tipoPrenda,this.value)
  }

 compra(){
  

  const objeto = {
    infoPago: new infoPago(
      this.pagoForm.get('docType')?.value,
      this.pagoForm.get('document')?.value,
      this.pagoForm.get('name')?.value,
      this.pagoForm.get('lastName')?.value,
      this.pagoForm.get('email')?.value,
      'CO',
      this.pagoForm.get('phone')?.value,
       'CO',
       this.pagoForm.get('city')?.value,
       this.pagoForm.get('address')?.value,
       'COP',
       this.tipoPrenda,
      this.value,
       "",
       false),
      
    medidas: new mdedidas(23, 23, 23, 23)
  };

       this.pagoServ.pago(objeto).subscribe(
        data=>{
         if(data.titleResponse == "Error"){
            console.log(data.textResponse)

         }else{
          console.log(data.textResponse)

         }
        },error=>{
          console.log(error)
        }
       )
 }
      


}
