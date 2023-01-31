import { Component, OnInit } from '@angular/core';
import {venta} from 'src/app/models/ventas';
import swal from 'sweetalert2';
import {VentasService} from 'src/app/services/ventas.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

listVentas : venta [] = []
medidaUno : string|any
medidaDos : string|any
medidaTres : string|any
medidaCuatro : string|any
medidaCinco : string|any
titulo :string |any
tipo : boolean |any
ocultar : boolean |any
  constructor(
    private ventaServ :VentasService,
    private router :Router 
  ) { }

  ngOnInit(): void {
    this.getVentas()
  }

  getVentas(){
    this.ventaServ.getAllVentasSup().subscribe(
      data=>{
        this.listVentas = data
        this.medidaUno = "ancho espalda"
        this.medidaDos = "hombro"
        this.medidaTres = "tronco"
        this.medidaCuatro = "largo brazo"
        this.medidaCinco = "contorno cintura"
        this.titulo = "superior"
        this.tipo = true
        this.ocultar = false
        
      },error=>{
        swal.fire({
          icon: 'error',
          title: error,
        
        })
      }
    )
  }


  getventasInf(){
    this.ventaServ.getAllVentaInf().subscribe(
      data=>{
        this.listVentas = data
        this.medidaUno = "Contorno cintura"
        this.medidaDos = "Contorno cadera"
        this.medidaTres = "Largo  cintura tobillo"
        this.medidaCuatro = "Ancho Bota"
        this.titulo = "inferior"
        this.tipo = false
        this.ocultar = true
        
      },error=>{
        swal.fire({
          icon: 'error',
          title: error,
        
        })
      }

    )
    
  }
}
