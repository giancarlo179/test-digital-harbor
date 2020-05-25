import { Paciente } from './../../Modelo/Paciente';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-pacientes',
  templateUrl: './listar-pacientes.component.html',
  styleUrls: ['./listar-pacientes.component.css']
})
export class ListarPacientesComponent implements OnInit {

  paciente: Paciente[];

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => { this.paciente = data;
    });
  }

  close(){
    this.router.navigate(['home']);
  }

  EditarPacientes(paciente: Paciente): void{
    localStorage.setItem('id', paciente.id.toString());
    console.log(paciente.id);
    console.log(paciente);
    this.router.navigate(['EditarPac']);
  }

  AddPaciente(){
    this.router.navigate(['AddPac']);
  }

  Eliminar(paciente: Paciente){
    this.service.deletePaciente(paciente)
    .subscribe( data => {
      this.paciente = this.paciente.filter(p => p !== paciente);
      alert('Paciente Eliminado con exito!');
    });
  }
}

