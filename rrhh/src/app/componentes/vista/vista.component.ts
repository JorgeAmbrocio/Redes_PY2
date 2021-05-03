import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SolicitudService, Vendedor } from "../../services/solicitud.service";

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  constructor(public solicitud: SolicitudService, public router: Router) { }

  registros:Array<Vendedor> = [
    {idVendedor : 5, dpi:'123456789', nombre:'vendedor1', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
    {idVendedor : 5, dpi:'123456789', nombre:'vendedor1', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
    {idVendedor : 5, dpi:'123456789', nombre:'vendedor1', apellido:'apellido1', direccion:'midireccion1', telefono:'987654321'},
  ];

  newVend : Vendedor = {
    idVendedor: 0,
    dpi: '',
    nombre: '',
    apellido: '',
    direccion: '',
    telefono: ''
  }

  ngOnInit(): void {
    this.solicitud.s1().subscribe(res =>{
      this.registros = res
      console.log(this.registros);
    })
  }

  
  reload(){
    this.solicitud.s1().subscribe((res)=>{
      this.registros = res;
      console.log(this.registros);
    })
  }

  setConsultas():void{
    this.solicitud.setConsulta(this.newVend).subscribe(o =>{
      this.reload()
      this.newVend = {
        idVendedor: 0,
        dpi: '',
        nombre: '',
        apellido: '',
        direccion: '',
        telefono: ''
      }
    })
    
  }

}
