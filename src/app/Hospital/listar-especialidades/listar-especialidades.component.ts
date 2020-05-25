import { Especialidad } from './../../Modelo/Especialidad';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-listar-especialidades',
  templateUrl: './listar-especialidades.component.html',
  styleUrls: ['./listar-especialidades.component.css']
})
export class ListarEspecialidadesComponent implements OnInit {

  especialidad: Especialidad[];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getEspecialidades()
    .subscribe(data => { this.especialidad = data;
    });

  }


  EditarEspecialidades(especialidad: Especialidad): void{
    localStorage.setItem('id', especialidad.id.toString());
    console.log(especialidad.id);
    console.log(especialidad);
    this.router.navigate(['EditarEsp']);
  }

  AddEspecialidad(){
    this.router.navigate(['AddEsp']);
  }

  close(){
    this.router.navigate(['home']);
  }

  Eliminar(especialidad: Especialidad){
    this.service.deleteEspecialidad(especialidad)
    .subscribe( data => {
      this.especialidad = this.especialidad.filter(p => p !== especialidad);
      alert('Especialidad Eliminado con exito!');
    });
  }
}
