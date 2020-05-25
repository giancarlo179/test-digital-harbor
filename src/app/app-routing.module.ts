import { DetalleNotasComponent } from './Hospital/detalle-notas/detalle-notas.component';
import { AddNotaComponent } from './Hospital/add-nota/add-nota.component';
import { ListarNotasComponent } from './Hospital/listar-notas/listar-notas.component';
import { HomeComponent } from './home/home.component';
import { EditHospitalComponent } from './Hospital/edit-hospital/edit-hospital.component';
import { AddPacienteComponent } from './Hospital/add-paciente/add-paciente.component';
import { AddEspecialidadComponent } from './Hospital/add-especialidad/add-especialidad.component';
import { AddDoctorComponent } from './Hospital/add-doctor/add-doctor.component';
import { EditPacienteComponent } from './Hospital/edit-paciente/edit-paciente.component';
import { EditEspecialidadComponent } from './Hospital/edit-especialidad/edit-especialidad.component';
import { EditDoctoresComponent } from './Hospital/edit-doctores/edit-doctores.component';
import { AppComponent } from './app.component';
import { ListarHospitalesComponent } from './Hospital/listar-hospitales/listar-hospitales.component';
import { ListarPacientesComponent } from './Hospital/listar-pacientes/listar-pacientes.component';
import { ListarEspecialidadesComponent } from './Hospital/listar-especialidades/listar-especialidades.component';
import { ListarDoctoresComponent } from './Hospital/listar-doctores/listar-doctores.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddHospitalComponent } from './Hospital/add-hospital/add-hospital.component';

const routes: Routes = [

  {path: 'home', component: HomeComponent},
  // Listar
  {path: 'listarDoc', component: ListarDoctoresComponent},
  {path: 'listarPac', component: ListarPacientesComponent},
  {path: 'listarEsp', component: ListarEspecialidadesComponent},
  {path: 'listarHosp', component: ListarHospitalesComponent},
  {path: 'listarNot', component: ListarNotasComponent},
  {path: 'DetalleNotas', component: DetalleNotasComponent},

  // Editar
  {path: 'EditarDoc', component: EditDoctoresComponent},
  {path: 'EditarEsp', component: EditEspecialidadComponent},
  {path: 'EditarPac', component: EditPacienteComponent},
  {path: 'EditarHosp', component: EditHospitalComponent},

  // Crear
  {path: 'AddDoc', component: AddDoctorComponent},
  {path: 'AddEsp', component: AddEspecialidadComponent},
  {path: 'AddPac', component: AddPacienteComponent},
  {path: 'AddHosp', component: AddHospitalComponent},
  {path: 'AddNot', component: AddNotaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
