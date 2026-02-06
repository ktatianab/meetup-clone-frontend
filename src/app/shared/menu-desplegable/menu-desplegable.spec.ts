import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuDesplegable } from './menu-desplegable';

describe('MenuDesplegable', () => {
  let component: MenuDesplegable;
  let fixture: ComponentFixture<MenuDesplegable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuDesplegable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuDesplegable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
