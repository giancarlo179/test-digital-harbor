import { Doctor } from './../../Modelo/Doctor';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-doctores',
  templateUrl: './listar-doctores.component.html',
  styleUrls: ['./listar-doctores.component.css']
})
export class ListarDoctoresComponent implements OnInit {

  doctor: Doctor[];
  constructor(private router: Router, private service: ServiceService ) { }

  ngOnInit(): void {
    this.service.getDoctores()
    .subscribe(data => { this.doctor = data;
    });
  }


  Editar(doctor: Doctor): void{
    localStorage.setItem('id', doctor.id.toString());
    console.log(doctor.id);
    console.log(doctor);
    this.router.navigate(['EditarDoc']);
    }

  AddDoctor(){
    this.router.navigate(['AddDoc']);
  }

  close(){
    this.router.navigate(['home']);
  }

  Eliminar(doctor: Doctor){
    this.service.deleteDoctor(doctor)
    .subscribe( data => {
      this.doctor = this.doctor.filter(p => p !== doctor);
      alert('Doctor Eliminado con exito!');
    });
  }

}
