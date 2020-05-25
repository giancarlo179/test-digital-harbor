import { Hospital } from './../../Modelo/Hospital';
import { ServiceService } from 'src/app/Service/service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-hospitales',
  templateUrl: './listar-hospitales.component.html',
  styleUrls: ['./listar-hospitales.component.css']
})
export class ListarHospitalesComponent implements OnInit {

  hospital: Hospital[];
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    this.service.getHospitales()
    .subscribe(data => { this.hospital = data;
    });
  }

  AddHospital(){
    this.router.navigate(['AddHosp']);
  }

  close(){
    this.router.navigate(['home']);
  }


  EditarHospital(hospital: Hospital): void{
    localStorage.setItem('id', hospital.id.toString());
    console.log(hospital.id);
    console.log(hospital);
    this.router.navigate(['EditarHosp']);
  }

  Eliminar(hospital: Hospital){
    this.service.deleteHospital(hospital)
    .subscribe( data => {
      this.hospital = this.hospital.filter(p => p !== hospital);
      alert('Hospital Eliminado con exito!');
    });
  }
}
