import { Component, OnInit } from '@angular/core';
import { BackService, Venta, Producto, Vendedor } from '../back.service';


@Component({
  selector: 'app-vistas',
  templateUrl: './vistas.component.html',
  styleUrls: ['./vistas.component.css']
})
export class VistasComponent implements OnInit {

  productos:Array<Producto> = [
    {idProducto : 5,titulo:'soy un ritutlo', descripcion:'desc1', autor:'autor1', anio:1999},
    {idProducto : 6,titulo:'soy un ritutlo2', descripcion:'desc2', autor:'autor2', anio:1999},
    {idProducto : 7,titulo:'soy un ritutlo3', descripcion:'desc3', autor:'autor3', anio:1999}
  ];

  vendedores:Array<Vendedor> = [
    {idVendedor : 1, dpi:'123456789', nombre:'vendedor1', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
    {idVendedor : 2, dpi:'123456789', nombre:'vendedor2', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
    {idVendedor : 3, dpi:'123456789', nombre:'vendedor3', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
  ];

  datos:Array<Venta> = [
    {idProducto : 1,titulo:'soy un ritutlo 1', idVendedor:1, nombre:'vendedor 1'},
    {idProducto : 2,titulo:'soy un ritutlo 2', idVendedor:2, nombre:'vendedor 2'},
    {idProducto : 3,titulo:'soy un ritutlo 3', idVendedor:3, nombre:'vendedor 3'}
  ];

  newVenta:Venta = {
    idProducto:0,
    titulo:'',
    idVendedor:0,
    nombre:''
  };

  constructor(private _servicio:BackService) { }

  ngOnInit(): void {
    this.getConsulta()
    this.getProductos()
    this.getVendedores()
  }

  getConsulta():void{
    console.log('Cargando datos')
    this._servicio.getConsulta().subscribe(o => {
      console.log('Respuesta get')
      console.log(o)
      this.datos = o
    })
  }

  getProductos():void{
    console.log('Cargando Productos')
    this._servicio.getProductos().subscribe(o => {
      console.log('Respuesta productos')
      console.log(o)
      this.productos = o
    })
  }

  getVendedores():void{
    console.log('Cargando Vendedores')
    this._servicio.getVendedores().subscribe(o => {
      console.log('Respuesta vendedores')
      console.log(o)
      this.vendedores = o
    })
  }

  setConsultas():void{
    console.log('Botón presionado')
    console.log(this.newVenta)
    this._servicio.setConsulta(this.newVenta).subscribe(o =>{
      console.log('Respuesta set')
      console.log(o)
      this.getConsulta()
      this.newVenta = {
        idProducto:0,
        titulo:'',
        idVendedor:0,
        nombre:''
      } ;
    }) 
  }

  changeOptionProducto (e:any): void{
    console.log(e.value);
    this.newVenta.idProducto = e.value;
  }

  changeOptionVendedor (e:any): void{
    console.log(e.value);
    this.newVenta.idVendedor = e.value;
  }
}
