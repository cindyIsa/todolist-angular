import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadInputComponent } from './head-input.component';

describe('HeadInputComponent', () => {
  let component: HeadInputComponent;
  let fixture: ComponentFixture<HeadInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadInputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
