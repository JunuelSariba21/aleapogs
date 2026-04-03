import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleMarksman } from './role-marksman';

describe('RoleMarksman', () => {
  let component: RoleMarksman;
  let fixture: ComponentFixture<RoleMarksman>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleMarksman],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleMarksman);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
