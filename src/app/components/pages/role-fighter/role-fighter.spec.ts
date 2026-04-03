import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleFighter } from './role-fighter';

describe('RoleFighter', () => {
  let component: RoleFighter;
  let fixture: ComponentFixture<RoleFighter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleFighter],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleFighter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
