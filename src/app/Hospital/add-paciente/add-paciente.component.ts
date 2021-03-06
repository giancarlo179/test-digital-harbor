import { Paciente } from './../../Modelo/Paciente';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-paciente',
  templateUrl: './add-paciente.component.html',
  styleUrls: ['./add-paciente.component.css']
})
export class AddPacienteComponent implements OnInit {

  paciente: Paciente = new Paciente();
  currentDate = new Date().toLocaleDateString();
  AddForm: FormGroup;

  // tslint:disable-next-line: variable-name
  validation_messages = {
    nombre: [
      { type: 'required', message: 'El Campo Nombre es requerido'},
      { type: 'pattern', message: 'Nombre Invalido, no debe incluir numeros ni caracteres especiales'}

    ],
    apellidos: [
      { type: 'required', message: 'El Campo Descripcion es requerido' },
      { type: 'pattern', message: 'Apellido Invalido, no debe incluir numeros ni caracteres especiales'}
    ],

    direccion: [
      { type: 'required', message: 'El Campo Direccion es requerido' },
    ],

    telefono: [
      { type: 'required', message: 'El Campo Telefono es requerido' },
      { type: 'minlength', message: 'El numero debe tener por lo menos 8 caracteres' },
    ],

    fechaNacimiento: [
      { type: 'required', message: 'El Campo Ciudad es requerido' },
      { type: 'pattern', message: 'Ciudad Invalida' }
    ]
  };
  constructor(private router: Router,
              private service: ServiceService,
              private formBuilder: FormBuilder) {

              this.AddForm = new FormGroup({
              nombre: new FormControl( '',
              Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z]+')
              ])),

              apellidos: new FormControl('',
              Validators.compose([
              Validators.required,
              Validators.pattern('^([a-zA-Z]+)+\s[a-zA-Z]+|([a-zA-Z]+)')
              ])),
              // ^([a-zA]+)+\s[a-zA]+|([a-zA]+)
              direccion: new FormControl( '',
              Validators.compose([
              Validators.required,
              ])),

              telefono: new FormControl( '',
              Validators.compose([
              Validators.required,
              Validators.minLength(8),
              ])),

              fotoPerfil: new FormControl( ''),

              fechaNacimiento: new FormControl( ''),

              fechaCreacion: new FormControl( '')
              });
              }

  ngOnInit(): void {
  }

  GuardarP(addPac){
    addPac.fotoPerfil = addPac.fotoPerfil.toString().replace(/^\w\:\\\w+\\/, '');
    this.service.createPaciente(addPac)
    .subscribe(data => {
      alert('Se agrego con exito el Paciente!');
      this.router.navigate(['/home']);
    });
    console.log(addPac);
    console.log('Fecha ' + this.currentDate);
  }
}
