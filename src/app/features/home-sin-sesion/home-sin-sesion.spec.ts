import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeSinSesion } from './home-sin-sesion';

describe('HomeSinSesion', () => {
  let component: HomeSinSesion;
  let fixture: ComponentFixture<HomeSinSesion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeSinSesion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeSinSesion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


