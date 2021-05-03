import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BackService {
  
  constructor(private _http:HttpClient) { }

  getConsulta():void {

  }

  setConsulta(prod:Producto):void {

  }
}

export interface Producto {
  idProducto:number,
  titulo:string,
  descripcion:string,
  autor:string,
  anio:number
}