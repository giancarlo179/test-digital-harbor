import { ListarHospitalesComponent } from './../Hospital/listar-hospitales/listar-hospitales.component';
import { Hospital } from './../Modelo/Hospital';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  hospital: Hospital[];

  constructor(private router: Router,
              private service: ServiceService) {  }

  ngOnInit(): void {
    this.service.getHospitales()
    .subscribe(data => { this.hospital = data;
    });
  }

  ListarDoctores(){
    this.router.navigate(['listarDoc']);
  }

  ListarPacientes(){
    this.router.navigate(['listarPac']);
  }

  ListarEspecialidades(){
    this.router.navigate(['listarEsp']);
  }

  ListarHospitales(){
    this.router.navigate(['listarHosp']);
  }

  ListarNotas(){
    this.router.navigate(['listarNot']);
  }
  AddHospital(){
    this.router.navigate(['AddHosp']);
  }

  AddDoctor(){
    this.router.navigate(['AddDoc']);
  }

  AddPaciente(){
    this.router.navigate(['AddPac']);
  }

  AddEspecialidad(){
    this.router.navigate(['AddEsp']);
  }

  home(){
    this.router.navigate(['home']);
  }
}
