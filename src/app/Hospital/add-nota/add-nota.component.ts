import { Paciente } from './../../Modelo/Paciente';
import { Notas } from './../../Modelo/Notas';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/Modelo/Doctor';

@Component({
  selector: 'app-add-nota',
  templateUrl: './add-nota.component.html',
  styleUrls: ['./add-nota.component.css']
})
export class AddNotaComponent implements OnInit {

  notas: Notas = new Notas();
  currentDate = new Date().toLocaleDateString();
  paciente: Paciente[];
  doctor: Doctor[];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getPacientes()
    .subscribe(data => { this.paciente = data;
    });

    this.service.getDoctores()
    .subscribe(data => { this.doctor = data;
    });
  }


  GuardarN(){
    this.service.createNotas(this.notas)
    .subscribe(data => {
      alert('Se creo con exito una nueva nota de visita!');
      this.router.navigate(['/home']);
    });
    console.log(this.notas);
    console.log('Fecha ' + this.currentDate);

  }
}
