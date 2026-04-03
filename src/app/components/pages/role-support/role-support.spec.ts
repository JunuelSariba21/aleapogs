import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleSupport } from './role-support';

describe('RoleSupport', () => {
  let component: RoleSupport;
  let fixture: ComponentFixture<RoleSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleSupport],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleSupport);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
