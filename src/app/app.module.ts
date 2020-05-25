import { HttpClientModule } from '@angular/common/http';
import { ServiceService } from './Service/service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarDoctoresComponent } from './Hospital/listar-doctores/listar-doctores.component';
import { ListarPacientesComponent } from './Hospital/listar-pacientes/listar-pacientes.component';
import { ListarEspecialidadesComponent } from './Hospital/listar-especialidades/listar-especialidades.component';
import { ListarHospitalesComponent } from './Hospital/listar-hospitales/listar-hospitales.component';
import { AddHospitalComponent } from './Hospital/add-hospital/add-hospital.component';
import { EditHospitalComponent } from './Hospital/edit-hospital/edit-hospital.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Popup
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EditPacienteComponent } from './Hospital/edit-paciente/edit-paciente.component';
import { EditDoctoresComponent } from './Hospital/edit-doctores/edit-doctores.component';
import { EditEspecialidadComponent } from './Hospital/edit-especialidad/edit-especialidad.component';
import { AddDoctorComponent } from './Hospital/add-doctor/add-doctor.component';
import { AddPacienteComponent } from './Hospital/add-paciente/add-paciente.component';
import { AddEspecialidadComponent } from './Hospital/add-especialidad/add-especialidad.component';
import { AddNotaComponent } from './Hospital/add-nota/add-nota.component';
import { HomeComponent } from './home/home.component';
import { ListarNotasComponent } from './Hospital/listar-notas/listar-notas.component';
import { DetalleNotasComponent } from './Hospital/detalle-notas/detalle-notas.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarDoctoresComponent,
    ListarPacientesComponent,
    ListarEspecialidadesComponent,
    ListarHospitalesComponent,
    AddHospitalComponent,
    EditHospitalComponent,
    EditPacienteComponent,
    EditDoctoresComponent,
    EditEspecialidadComponent,
    AddDoctorComponent,
    AddPacienteComponent,
    AddEspecialidadComponent,
    AddNotaComponent,
    HomeComponent,
    ListarNotasComponent,
    DetalleNotasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
