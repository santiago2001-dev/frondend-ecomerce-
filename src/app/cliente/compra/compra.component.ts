import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { busqueda, producto } from 'src/app/models/productos';
import { ProductosService } from 'src/app/services/productos.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-compra',
  templateUrl: './compra.component.html',
  styleUrls: ['./compra.component.css']
})
export class CompraComponent implements OnInit {
  listProduct : producto[] = []
  Id : String |null;
  redirec = ""
  redirecPse :String =  ""
  constructor(
    private router : Router,
    private productServ : ProductosService,
    private aRouter : ActivatedRoute

  ) { 
    this.Id = this.aRouter.snapshot.paramMap.get('id');

  }

  ngOnInit(): void {
    this.getProductbyid()
  }
getProductbyid(){
  this.productServ.getProductByid(this.Id).subscribe(
    data=>{
      this.listProduct = data
      console.log(data[0].tipo)
      if(data[0].tipo == "Inferior"){
        this.redirec = "/home/pago"
        this.redirecPse = "/home/pagoPse"
      }else{
        this.redirec = "/home/pagoSup"
        this.redirecPse = "/home/pagoSupPse"


      }

    },error=>{
      swal.fire({
        icon: 'error',
        title: error,
      
      })
    }

  )
}
}
