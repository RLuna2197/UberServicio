import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarSComponent } from './actualizar-s.component';

describe('ActualizarSComponent', () => {
  let component: ActualizarSComponent;
  let fixture: ComponentFixture<ActualizarSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActualizarSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActualizarSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
