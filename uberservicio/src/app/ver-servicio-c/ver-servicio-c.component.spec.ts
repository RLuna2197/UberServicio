import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerServicioCComponent } from './ver-servicio-c.component';

describe('VerServicioCComponent', () => {
  let component: VerServicioCComponent;
  let fixture: ComponentFixture<VerServicioCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerServicioCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerServicioCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
