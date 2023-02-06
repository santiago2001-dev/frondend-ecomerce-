import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PagoService {
server = environment.servidor
  constructor(
    private http :HttpClient
  ) { }


    pago(info:any):Observable<any>{
      let url =`${this.server}product/compra`
      return  this.http.post(url,info)
    }
}
