import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleAssassin } from './role-assassin';

describe('RoleAssassin', () => {
  let component: RoleAssassin;
  let fixture: ComponentFixture<RoleAssassin>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleAssassin],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleAssassin);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
