import { Component, OnInit } from '@angular/core';
import { BackService, Producto } from '../back.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {
  

  datos:Array<Producto> = [
    {idProducto : 5,titulo:'soy un ritutlo', descripcion:'desc1', autor:'autor1', anio:1999},
    {idProducto : 6,titulo:'soy un ritutlo2', descripcion:'desc2', autor:'autor2', anio:1999},
    {idProducto : 7,titulo:'soy un ritutlo3', descripcion:'desc3', autor:'autor3', anio:1999}
  ];

  newProd:Producto = {
    idProducto:0,
    titulo:'',
    descripcion:'',
    autor:'',
    anio:0
  } ;

  

  constructor(
    private _servicio:BackService
  ) 
  { }

  ngOnInit(): void {
  }

}

