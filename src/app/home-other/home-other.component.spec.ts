import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeOtherComponent } from './home-other.component';

describe('HomeOtherComponent', () => {
  let component: HomeOtherComponent;
  let fixture: ComponentFixture<HomeOtherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeOtherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeOtherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
