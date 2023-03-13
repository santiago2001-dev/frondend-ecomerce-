import { Component, OnInit } from '@angular/core';
import {direccion,infoPago,mdedidasSup} from 'src/app/models/pagoPse'
import swal from 'sweetalert2';
import decode from 'jwt-decode';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import {PagoPseService}from 'src/app/services/pago-pse.service'
import { bank } from 'src/app/models/bank';
@Component({
  selector: 'app-pago-pse-superior',
  templateUrl: './pago-pse-superior.component.html',
  styleUrls: ['./pago-pse-superior.component.css']
})
export class PagoPseSuperiorComponent implements OnInit {
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
        "medidaCinco": ['',Validators.required],

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
        this.listBank = data.data
      },error =>{
          console.log(error)
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
      mdedidas : new mdedidasSup(
        this.pagoForm.get('medidaUno')?.value,
        this.pagoForm.get('medidaDos')?.value,
        this.pagoForm.get('medidaTres')?.value,
        this.pagoForm.get('medidaCuatro')?.value,
        this.pagoForm.get('medidaCinco')?.value,
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
       
            swal.fire({
            icon: 'error',
            title: `${data.textResponse}`,
          
          })
       

         }else{
          swal.fire('Seras redirigido a la pagina de tú banco gracias')
          window.location.href =data.data.urlbanco
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
