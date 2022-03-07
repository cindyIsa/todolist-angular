import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UndoneTaskComponent } from './undone-task.component';

describe('UndoneTaskComponent', () => {
  let component: UndoneTaskComponent;
  let fixture: ComponentFixture<UndoneTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UndoneTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UndoneTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
