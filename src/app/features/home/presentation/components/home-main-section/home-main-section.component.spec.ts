import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMainSectionComponent } from './home-main-section.component';

describe('HomeMainSectionComponent', () => {
  let component: HomeMainSectionComponent;
  let fixture: ComponentFixture<HomeMainSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeMainSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeMainSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
