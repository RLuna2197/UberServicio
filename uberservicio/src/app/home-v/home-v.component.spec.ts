import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVComponent } from './home-v.component';

describe('HomeVComponent', () => {
  let component: HomeVComponent;
  let fixture: ComponentFixture<HomeVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
