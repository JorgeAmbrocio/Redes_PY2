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
  {
    this.getConsulta()
  }

  ngOnInit(): void {
    this._servicio.getConsulta().subscribe(o => {
      this.datos = o
    })
  }

  getConsulta():void{
    console.log('Cargando datos')
    this._servicio.getConsulta().subscribe(o => {
      console.log('Respuesta get')
      console.log(o)
      this.datos = o
    })
  }

  setConsultas():void{
    console.log('Botón presionado')
    this._servicio.setConsulta(this.newProd).subscribe(o =>{
      console.log('Respuesta set')
      console.log(o)
      this.getConsulta()
      this.newProd = {
        idProducto:0,
        titulo:'',
        descripcion:'',
        autor:'',
        anio:0
      }
    })
    
  }

}

