import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleTank } from './role-tank';

describe('RoleTank', () => {
  let component: RoleTank;
  let fixture: ComponentFixture<RoleTank>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoleTank],
    }).compileComponents();

    fixture = TestBed.createComponent(RoleTank);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
