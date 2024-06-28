import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectivessComponent } from './objectivess.component';

describe('ObjectivessComponent', () => {
  let component: ObjectivessComponent;
  let fixture: ComponentFixture<ObjectivessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ObjectivessComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ObjectivessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
