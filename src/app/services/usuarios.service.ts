import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {userAdm,userCli, userIn} from 'src/app/models/user'
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  server  = environment.servidor



  constructor(
    private http : HttpClient
  ) { }

    getAllUsers():Observable<any>{
      let url = `${this.server}users`
      return this.http.get(url);
    }
    getUsersById(id: any):Observable<any>{
      let url = `${this.server}users`
      return this.http.get(`${url}/${id}`);

    }

    crearteUserAdm(user :userIn):Observable<any>{
      let url = `${this.server}users`
      return this.http.post(url,user)
    }

    crearteUserCli(user :userCli):Observable<any>{
      let url = `${this.server}users/cliente`
      return this.http.post(url,user)
    }

    updateUser(id: any,user: userIn):Observable<any>{
      let url = `${this.server}users`
      return this.http.put(`${url}/${id}`,user)
    }


    deleteUser(id: any):Observable<any>{
      let url = `${this.server}users`
      return this.http.delete(`${url}/${id}`)

    }

}
