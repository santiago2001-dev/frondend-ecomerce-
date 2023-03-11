import { Component, OnInit } from '@angular/core';
import {direccion,infoPago,mdedidas} from 'src/app/models/pagoPse'
import swal from 'sweetalert2';
import decode from 'jwt-decode';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {PagoPseService}from 'src/app/services/pago-pse.service'
import { bank } from 'src/app/models/bank';
@Component({
  selector: 'app-pago-pse',
  templateUrl: './pago-pse.component.html',
  styleUrls: ['./pago-pse.component.css']
})
export class PagoPseComponent implements OnInit {
  listBank : bank [] =[]
  pagoForm : FormGroup
  tipoPrenda : string  |any
  value : string | any
  token : string |any
  tokenDes : string |any
  dataError : string |any
  constructor(
  
    private pagoServ : PagoPseService,
    private fb : FormBuilder,
    private router : Router,
    private aRouter : ActivatedRoute

  ) { 
    this.pagoForm= this.fb.group(
      {
        "bank": ['',Validators.required],
        "cell_phone": ['',Validators.required],
        "direccion": ['',Validators.required],
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
    swal.fire('En stay queremos crear tú prenda a tú medida, por eso te pediremos unas medidas te pondremos una imagen para que te guies ')
    this.getBank();

  }


getBank(){
  this.pagoServ.getBanks().subscribe(
    data=>{
      this.listBank = data

    },error =>{
        
    }
    
  )
}
  compra(){
    this.token = localStorage.getItem('token')
    this.tokenDes = decode(this.token);
    const {email,names,documento} = this.tokenDes;
    const objeto = {
      infoPago : new infoPago(
        this.pagoForm.get('bank')?.value,
        this.tipoPrenda,
        this.value,
        "0",
        "0",
        "COP",
        "0",
        "CC",
        documento,
        names,
        names,
        email,
        "CO",
        this.pagoForm.get('cell_phone')?.value,
        "190.000.000.000",
         "https://google.com",
         "https://stay-back.herokuapp.com/api/pse/rta",
        "POST"
      ),
      mdedidas : new mdedidas(
        this.pagoForm.get('medidaUno')?.value,
        this.pagoForm.get('medidaDos')?.value,
        this.pagoForm.get('medidaTres')?.value,
        this.pagoForm.get('medidaCuatro')?.value,
      ),

      direccion : new direccion(
        this.pagoForm.get('direccion')?.value
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
}