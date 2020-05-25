import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Paciente } from 'src/app/Modelo/Paciente';

@Component({
  selector: 'app-edit-paciente',
  templateUrl: './edit-paciente.component.html',
  styleUrls: ['./edit-paciente.component.css']
})
export class EditPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();
  constructor(private router: Router,
              private service: ServiceService) { }

  ngOnInit(): void {
    const id = localStorage.getItem('id');
    this.service.getPacienteId(+id)
    .subscribe( data => {
      this.paciente = data;
    });
  }

  actualizar(paciente: Paciente){
    paciente.fotoPerfil = paciente.fotoPerfil.toString().replace(/^\w\:\\\w+\\/, '');
    console.log(paciente);
    this.service.updatePaciente(paciente)
    .subscribe(data => {
      this.paciente = data;
      alert('Se Actualizo con Exito!');
      this.router.navigate(['/home']);
    });
  }
}
