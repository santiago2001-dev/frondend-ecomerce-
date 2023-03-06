import { Component, OnInit } from '@angular/core';
import {venta} from 'src/app/models/ventas';
import swal from 'sweetalert2';
import {VentasService} from 'src/app/services/ventas.service'
import { ActivatedRoute, Router } from '@angular/router';
import decode from 'jwt-decode';

@Component({
  selector: 'app-registro-compras',
  templateUrl: './registro-compras.component.html',
  styleUrls: ['./registro-compras.component.css']
})
export class RegistroComprasComponent implements OnInit {
  listVentas : venta [] = []
  token : string |any
  tokenDes : string |any
  constructor(
    private router : Router,
    private aRouter : ActivatedRoute,
    private ventaServ :VentasService,

  ) { }

  ngOnInit(): void {
    this.getCompras();
  }
    getCompras(){
      this.token = localStorage.getItem('token')
    this.tokenDes = decode(this.token);
    const {documento} = this.tokenDes;
    this.ventaServ.getAllVentasbyDocumen(documento).subscribe(
      data=>{
        this.listVentas = data
      },error=>{

      }
    )

    }
}
