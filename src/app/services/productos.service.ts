import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {producto, productoinsert, productoUp} from 'src/app/models/productos'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  server  = environment.servidor

  constructor(
    private http : HttpClient
  ) { }

    getAllProduct ():Observable<any>{
      let url  = `${this.server}product`
      return this.http.get(url)

    }

    getProductByid(id : any):Observable<any>{
      let url  = `${this.server}product`
      return this.http.get(`${url}/${id}`)

    }

    search(busqueda :any):Observable<any>{

      let url  = `${this.server}product/search`
      return this.http.post(url,busqueda)
    }


    insertProduct(producto : productoinsert):Observable<any>{
      let url  = `${this.server}product`
      return  this.http.post(url,producto)


    }


    updateProduct(id: any,producto: productoUp):Observable<any>{
      let url  = `${this.server}product`
       return  this.http.put(`${url}/${id}`,producto)

    }

    deleteProduct(id:any):Observable<any>{
      let url  = `${this.server}product`
      return this.http.delete(`${url}/${id}`)
    }

}
