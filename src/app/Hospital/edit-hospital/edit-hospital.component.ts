import { Hospital } from './../../Modelo/Hospital';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit-hospital',
  templateUrl: './edit-hospital.component.html',
  styleUrls: ['./edit-hospital.component.css']
})
export class EditHospitalComponent implements OnInit {
  hospital: Hospital = new Hospital();
  constructor(private router: Router,
              private service: ServiceService){}

    ngOnInit(): void {
      const id = localStorage.getItem('id');
      this.service.getHospitalId(+id)
      .subscribe( data => {
      this.hospital = data;
      });
    }

    actualizar(hospital: Hospital){
      console.log(hospital);
      this.service.updateHospital(hospital)
      .subscribe(data => {
        this.hospital = data;
        alert('Se Actualizo con Exito!');
        this.router.navigate(['/home']);
      });
    }
}
