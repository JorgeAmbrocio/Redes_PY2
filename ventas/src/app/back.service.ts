import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackService {

  rutaBase:string = 'http://192.168.7.34:3030';
  constructor(private _http:HttpClient) { }

  getConsulta():Observable<any> {
    return this._http.get(`${this.rutaBase}/venta` );
  }

  getVendedores():Observable<any> {
    return this._http.get(`${this.rutaBase}/vendedor`);
  }

  getProductos():Observable<any> {
    return this._http.get(`${this.rutaBase}/producto`);
  }

  setConsulta(venta:Venta):Observable<any> {
    return this._http.post(
      `${this.rutaBase}/venta`, venta);
  }
}

export interface Venta {
  idProducto:number,
  idVendedor:number,
  nombre:string,
  titulo:string
}

export interface Producto {
  idProducto:number,
  titulo:string,
  descripcion:string,
  autor:string,
  anio:number
}

export interface Vendedor {
  idVendedor:number,
  dpi:string,
  nombre:string,
  apellido:string,
  direccion:string,
  telefono:string
}