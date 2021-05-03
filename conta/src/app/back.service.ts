import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BackService {
  rutaBase:string = 'http://192.168.7.34:3030/producto';
  constructor(private _http:HttpClient) { }

  getConsulta():Observable<any> {
    return this._http.get(this.rutaBase);
  }

  setConsulta(prod:Producto):Observable<any> {
    return this._http.post(
      this.rutaBase, prod);
  }
}

export interface Producto {
  idProducto:number,
  titulo:string,
  descripcion:string,
  autor:string,
  anio:number
}