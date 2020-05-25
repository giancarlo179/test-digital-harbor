import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hospital } from 'src/app/Modelo/Hospital';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hospital',
  templateUrl: './add-hospital.component.html',
  styleUrls: ['./add-hospital.component.css']
})
export class AddHospitalComponent implements OnInit {

  AddForm: FormGroup;

  // tslint:disable-next-line: variable-name
  validation_messages = {
    nombre: [
      {type: 'required', message: 'El Campo Nombre es requerido'},
      // {type: 'pattern', message: 'Nombre Invalido, no debe incluir numeros ni caracteres especiales'}

    ],
    descripcion: [
      { type: 'required', message: 'El Campo Descripcion es requerido' }
    ],

    direccion: [
      { type: 'required', message: 'El Campo Direccion es requerido' },
    ],

    telefono: [
      { type: 'required', message: 'El Campo Telefono es requerido' },
      { type: 'minlength', message: 'El numero debe tener por lo menos 8 caracteres' },
    ],

    ciudad: [
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
                    // Validators.pattern('^[a-zA]+')
                  ])),

                  descripcion: new FormControl('',
                  Validators.compose([
                    Validators.required
                    // Validators.pattern('^([a-zA]+)+\s[a-zA]+|([a-zA]+)')
                  ])),

                  direccion: new FormControl( '',
                  Validators.compose([
                    Validators.required,
                  ])),

                  telefono: new FormControl( '',
                  Validators.compose([
                    Validators.required,
                    Validators.minLength(8),
                  ])),

                  ciudad: new FormControl( '',
                  Validators.compose([
                    Validators.required,
                    Validators.pattern('^[a-zA]+')
                  ])),
                  fechaCreacion: new FormControl( '')

                });
              }
  hospital: Hospital = new Hospital();
  currentDate = new Date().toLocaleDateString();

  ngOnInit(): void {
  }


  GuardarH( addhospital){
    this.service.createHospital(addhospital)
    .subscribe(data => {
      alert('Se agrego con exito el Hospital!');
      this.router.navigate(['/home']);
    });
    console.log(addhospital);
    console.log(this.hospital);
    console.log('Fecha ' + this.currentDate);
  }
}
