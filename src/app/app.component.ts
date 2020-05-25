import { ListarPacientesComponent } from './Hospital/listar-pacientes/listar-pacientes.component';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hospital';
  navbarCollapsed = true;
  isPopupOpened = true;
  constructor(private router: Router, public matDialog: MatDialog ){}

  ListarDoctores(){
    this.router.navigate(['listarDoc']);
  }

  ListarPacientes(){
    this.router.navigate(['listarPac']);
  }

  ListarEspecialidades(){
    this.router.navigate(['listarEsp']);
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

  AddNotas(){
    this.router.navigate(['AddNot']);
  }

  home(){
    this.router.navigate(['home']);
  }

  verDetalleNotas(){
    this.router.navigate(['verDetalleNotas']);
  }
}
