import { Especialidad } from './../../Modelo/Especialidad';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-especialidad',
  templateUrl: './edit-especialidad.component.html',
  styleUrls: ['./edit-especialidad.component.css']
})
export class EditEspecialidadComponent implements OnInit {

  especialidad: Especialidad = new Especialidad();

  constructor(private router: Router,
              private service: ServiceService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.service.getEspecialidadId(+id)
    .subscribe( data => {
      this.especialidad = data;
    });
  }

  actualizar(especialidad: Especialidad){
    especialidad.avatar = especialidad.avatar.toString().replace(/^\w\:\\\w+\\/, '');
    console.log(especialidad);
    this.service.updateEspecialidad(especialidad)
    .subscribe(data => {
      this.especialidad = data;
      alert('Se Actualizo con Exito!');
      this.router.navigate(['/home']);
    });
  }
}
