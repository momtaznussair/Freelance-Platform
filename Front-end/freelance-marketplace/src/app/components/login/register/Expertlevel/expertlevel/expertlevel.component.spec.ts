import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpertlevelComponent } from './expertlevel.component';

describe('ExpertlevelComponent', () => {
  let component: ExpertlevelComponent;
  let fixture: ComponentFixture<ExpertlevelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpertlevelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpertlevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
