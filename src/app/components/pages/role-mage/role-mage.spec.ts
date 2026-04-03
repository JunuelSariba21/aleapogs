import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMage } from './role-mage';

describe('RoleMage', () => {
  let component: RoleMage;
  let fixture: ComponentFixture<RoleMage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleMage],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleMage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
