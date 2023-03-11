import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PagoPseService {
  server = environment.servidor

  constructor(
    private http :HttpClient

  ) { }


  getBanks():Observable<any>{
    let url =`${this.server}pse`
    return this.http.get(url)

  }

  pago(info: any):Observable<any>{
    let url =`${this.server}pse`
    return this.http.post(url,info);
  }
}
