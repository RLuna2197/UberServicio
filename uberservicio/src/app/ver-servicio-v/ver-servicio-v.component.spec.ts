import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerServicioVComponent } from './ver-servicio-v.component';

describe('VerServicioVComponent', () => {
  let component: VerServicioVComponent;
  let fixture: ComponentFixture<VerServicioVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerServicioVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerServicioVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
