import { Especialidad } from './../Modelo/Especialidad';
import { Notas } from './../Modelo/Notas';
import { Paciente } from './../Modelo/Paciente';
import { Doctor } from './../Modelo/Doctor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Hospital } from '../Modelo/Hospital';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {


  constructor(private http: HttpClient) { }

  // Listar cada una de los datos de la base de datos

  Url = 'http://localhost:8080/Hospital/doctores';

  Url2 = 'http://localhost:8080/Hospital/pacientes';

  Url3 = 'http://localhost:8080/Hospital/especialidades';

  Url4 = 'http://localhost:8080/Hospital/hospitales';

  Url5 = 'http://localhost:8080/Hospital/notas';
  getDoctores(){
    return this.http.get<Doctor[]>(this.Url);
  }

  getPacientes(){
    return this.http.get<Paciente[]>(this.Url2);
  }

  getEspecialidades(){
    return this.http.get<Especialidad[]>(this.Url3);
  }

  getHospitales(){
    return this.http.get<Hospital[]>(this.Url4);
  }

  getNotas(){
    return this.http.get<Notas[]>(this.Url5);
  }

  // Agregar datos a la Base de datos

  createHospital(hospital: Hospital){
    return this.http.post<Hospital>(this.Url4, hospital);
  }

  createDoctor(doctor: Doctor){
    return this.http.post<Doctor>(this.Url, doctor);
  }

  createPaciente(paciente: Paciente){
    return this.http.post<Paciente>(this.Url2, paciente);
  }

  createEspecialidad(especialidad: Especialidad){
    return this.http.post<Especialidad>(this.Url3, especialidad);
  }

  createNotas(notas: Notas){
    return this.http.post<Notas>(this.Url5, notas);
  }

  // Actualizar Datos

  getDoctorId(id: number){
    return this.http.get<Doctor>(this.Url + '/' + id);
  }

  updateDoctor(doctor: Doctor){
    return this.http.put<Doctor>(this.Url + '/' + doctor.id, doctor);
  }

  getPacienteId(id: number){
    return this.http.get<Paciente>(this.Url2 + '/' + id);
  }

  updatePaciente(paciente: Paciente){
    return this.http.put<Paciente>(this.Url2 + '/' + paciente.id, paciente);
  }

  getEspecialidadId(id: number){
    return this.http.get<Especialidad>(this.Url3 + '/' + id);
  }

  updateEspecialidad(especialdiad: Especialidad){
    return this.http.put<Especialidad>(this.Url3 + '/' + especialdiad.id, especialdiad);
  }

  getHospitalId(id: number){
    return this.http.get<Hospital>(this.Url4 + '/' + id);
  }

  updateHospital(hospital: Hospital){
    return this.http.put<Hospital>(this.Url4 + '/' + hospital.id, hospital);
  }

  // Eliminar Datos

  deleteDoctor(doctor: Doctor){
    return this.http.delete<Doctor>(this.Url + '/' + doctor.id);
  }

  deletePaciente(paciente: Paciente){
    return this.http.delete<Paciente>(this.Url2 + '/' + paciente.id);
  }

  deleteEspecialidad(especialidad: Especialidad){
    return this.http.delete<Especialidad>(this.Url3 + '/' + especialidad.id);
  }

  deleteHospital(hospital: Hospital){
    return this.http.delete<Hospital>(this.Url4 + '/' + hospital.id);
  }
}
