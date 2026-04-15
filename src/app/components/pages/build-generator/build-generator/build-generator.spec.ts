import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildGenerator } from './build-generator';

describe('BuildGenerator', () => {
  let component: BuildGenerator;
  let fixture: ComponentFixture<BuildGenerator>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildGenerator],
    }).compileComponents();

    fixture = TestBed.createComponent(BuildGenerator);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
