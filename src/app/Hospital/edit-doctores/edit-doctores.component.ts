import { Doctor } from './../../Modelo/Doctor';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Especialidad } from 'src/app/Modelo/Especialidad';

@Component({
  selector: 'app-edit-doctores',
  templateUrl: './edit-doctores.component.html',
  styleUrls: ['./edit-doctores.component.css']
})
export class EditDoctoresComponent implements OnInit {

  doctor: Doctor = new Doctor();
  especialidad: Especialidad[];

  constructor(private router: Router,
              private service: ServiceService){}
  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.service.getDoctorId(+id)
    .subscribe( data => {
      this.doctor = data;
    });
    this.service.getEspecialidades()
    .subscribe(data => { this.especialidad = data;
    });
  }

  Editar(){
    const id = localStorage.getItem('id');
    this.service.getDoctorId(+id)
    .subscribe( data => {
      this.doctor = data;
    });
  }

  actualizar(doctor: Doctor){
    doctor.fotoPerfil = doctor.fotoPerfil.toString().replace(/^\w\:\\\w+\\/, '');
    console.log(doctor);
    this.service.updateDoctor(doctor)
    .subscribe(data => {
      this.doctor = data;
      alert('Se Actualizo con Exito!');
      this.router.navigate(['/home']);
    });
  }
}
