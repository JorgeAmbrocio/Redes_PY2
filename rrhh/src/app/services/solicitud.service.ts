import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/jison"
  })

  s1():Observable<any>
  {
    const url = "http://127.0.0.1:3030/vendedor";
    return this.http.get(url);
  }

  setConsulta(sellman:Vendedor): Observable<any> {
    return this.http.post("http://127.0.0.1:3030/vendedor", sellman);
  }
}

export interface Vendedor {
  idVendedor:number,
  dpi:string,
  nombre:string,
  apellido:string,
  direccion:string,
  telefono:string
}
