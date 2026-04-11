import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroGalleryComponent } from './heroes';

describe('HeroGalleryComponent', () => {
  let component: HeroGalleryComponent;
  let fixture: ComponentFixture<HeroGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroGalleryComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeroGalleryComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
