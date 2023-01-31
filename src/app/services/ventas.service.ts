import { Injectable } from '@angular/core';
import {venta} from 'src/app/models/ventas'
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {
  server  = `${environment.servidor}ventas`


  constructor(
    private http : HttpClient
  ) { }

  getAllVentas():Observable<any>{
    return this.http.get(this.server)

  }

  getAllVentasSup():Observable<any>{
    return this.http.get(`${this.server}/sup`)

  }
  getAllVentaInf():Observable<any>{
    return this.http.get(`${this.server}/inf`)

  }
  getAllVentasbyDocumen(id: any):Observable<any>{
    return this.http.get(`${this.server}/${id}`)

  }

}
