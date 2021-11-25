import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nadvar2vComponent } from './nadvar2v.component';

describe('Nadvar2vComponent', () => {
  let component: Nadvar2vComponent;
  let fixture: ComponentFixture<Nadvar2vComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Nadvar2vComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Nadvar2vComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
