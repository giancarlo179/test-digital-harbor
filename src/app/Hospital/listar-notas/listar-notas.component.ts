import { Doctor } from './../../Modelo/Doctor';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Modelo/Paciente';
import { Notas } from 'src/app/Modelo/Notas';

@Component({
  selector: 'app-listar-notas',
  templateUrl: './listar-notas.component.html',
  styleUrls: ['./listar-notas.component.css']
})
export class ListarNotasComponent implements OnInit {

  paciente: Paciente[];
  doctor: Doctor[];
  notas: Notas[];

  constructor(private router: Router,
              private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => { this.paciente = data;
    });
    this.service.getDoctores()
    .subscribe(data => { this.doctor = data;
    });
    this.service.getNotas()
    .subscribe(data => {
      this.notas = data;
    });
  }
}
