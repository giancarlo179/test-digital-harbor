import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarHospitalesComponent } from './listar-hospitales.component';

describe('ListarHospitalesComponent', () => {
  let component: ListarHospitalesComponent;
  let fixture: ComponentFixture<ListarHospitalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarHospitalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarHospitalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
