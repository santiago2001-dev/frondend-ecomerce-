import { Component, OnInit } from '@angular/core';
import swal from 'sweetalert2';
import { infoPago,mdedidasSup } from 'src/app/models/pago';
import { Router,ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { PagoService } from 'src/app/services/pago.service';
import decode from 'jwt-decode';

@Component({
  selector: 'app-pago-superior',
  templateUrl: './pago-superior.component.html',
  styleUrls: ['./pago-superior.component.css']
})
export class PagoSuperiorComponent implements OnInit {
pagoForm : FormGroup
tipoPrenda : string  |any
value : string | any
token : string |any
tokenDes : string |any
dataError : string |any
  constructor(
    private pagoServ : PagoService,
    private fb : FormBuilder,
    private router : Router,
    private aRouter : ActivatedRoute
  ) {
    this.pagoForm = this.fb.group(
      {
       
        "phone": ['',Validators.required],
        "city": ['',Validators.required],
        "address": ['',Validators.required],
        "medidaUno" :['',Validators.required],
        "medidaDos": ['',Validators.required],
        "medidaTres": ['',Validators.required],
        "medidaCuatro": ['',Validators.required],
        "medidaCinco": ['',Validators.required],

      }
    ) 
    this.tipoPrenda = this.aRouter.snapshot.paramMap.get('tipoPrenda')
    this.value = this.aRouter.snapshot.paramMap.get('value')
   }

  ngOnInit(): void {
    swal.fire('En stay queremos crear tú prenda a tú medida, por eso te pediremos unas medidas te pondremos una imagen para que te guies ')

  }
  compra(){
  
    this.token = localStorage.getItem('token')
   this.tokenDes = decode(this.token);
   const {email,names,documento} = this.tokenDes;
   const objeto = {
      infoPago: new infoPago(
        "CC",
        documento,
        names,
        names,
        email,
        'CO',
        this.pagoForm.get('phone')?.value,
         'CO',
         this.pagoForm.get('city')?.value,
         this.pagoForm.get('address')?.value,
         'COP',
         this.tipoPrenda,
        this.value,
         ""),
        
      medidas: new mdedidasSup(
        this.pagoForm.get('medidaUno')?.value,
        this.pagoForm.get('medidaDos')?.value,
        this.pagoForm.get('medidaTres')?.value,
        this.pagoForm.get('medidaCuatro')?.value,
        this.pagoForm.get('medidaCinco')?.value,
  
      )
    };
    if(this.pagoForm.invalid){
      swal.fire({
        icon: 'error',
        title:'campo invalido verifica por favor ',
      
      })
      
   }else{
    this.pagoServ.pago(objeto).subscribe(
      data=>{
     
       if(data.success == false){
        data.data.errors.forEach((element: any) => {
          console.log(element)
          this.dataError = element.errorMessage

          });
          swal.fire({
          icon: 'error',
          title: `${data.textResponse} , ${this.dataError}`,
        
        })
     

       }else{
        swal.fire(data.textResponse)
        
        this.confirmPago();

       }

      },error=>{
        console.log(error)
        swal.fire({
          icon: 'error',
          title: error,
        
        })
      }
     )
 
   }
  }
   confirmPago(){
    let  opt = window.prompt('Ingresa el código que fue enviado ', );
    this.pagoServ.confirmPago(opt).subscribe(
      data=>{
        if(data.success == false){
          data.data.errors.forEach((element: any) => {
            console.log(element)
            this.dataError = element.errorMessage
  
            });
            swal.fire({
            icon: 'error',
            title: `${data.textResponse} , ${this.dataError}`,
          
          })
       
  
         }else{
          swal.fire(data.textResponse)
          
        }
          },error=>{
              console.log(error)
              swal.fire({
                icon: 'error',
                title: error,
              
              })
            }
    )
  
  
  }
  }
