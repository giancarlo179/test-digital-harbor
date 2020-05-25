import { Especialidad } from './../../Modelo/Especialidad';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-especialidad',
  templateUrl: './add-especialidad.component.html',
  styleUrls: ['./add-especialidad.component.css']
})
export class AddEspecialidadComponent implements OnInit {

  AddEsp: FormGroup;
  // tslint:disable-next-line: variable-name
  validation_messages = {
    nombre: [
      { type: 'required', message: 'El Campo Nombre es requerido'},
      { type: 'pattern', message: 'Nombre Invalido, no debe incluir numeros ni caracteres especiales'}

    ],
    descripcion: [
      { type: 'required', message: 'El Campo Descripcion es requerido' }    ]
  };

  especialidad: Especialidad = new Especialidad();
  currentDate = new Date().toLocaleDateString();
  constructor(private router: Router,
              private service: ServiceService,
              private formBuilder: FormBuilder) {

              this.AddEsp = new FormGroup({
              nombre: new FormControl( '',
              Validators.compose([
              Validators.required,
              Validators.pattern('^[a-zA-Z]+')
              ])),

              descripcion: new FormControl('',
              Validators.compose([
              Validators.required
              ])),
              avatar: new FormControl( ''),
              fechaCreacion: new FormControl( ''),
              });
              }

  ngOnInit(): void {
  }

  GuardarE(AddEsp){
    AddEsp.avatar = AddEsp.avatar.toString().replace(/^\w\:\\\w+\\/, '');
    this.service.createEspecialidad(AddEsp)
    .subscribe(data => {
      alert('Se agrego con exito una nueva Especialidad!');
      this.router.navigate(['/home']);
    });
    console.log(this.especialidad);
    console.log('Fecha ' + this.currentDate);
  }
  }

