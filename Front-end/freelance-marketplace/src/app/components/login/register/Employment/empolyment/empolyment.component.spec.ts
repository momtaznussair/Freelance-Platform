import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolymentComponent } from './empolyment.component';

describe('EmpolymentComponent', () => {
  let component: EmpolymentComponent;
  let fixture: ComponentFixture<EmpolymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolymentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
