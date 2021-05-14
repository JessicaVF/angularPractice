import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVolsComponent } from './add-vols.component';

describe('AddVolsComponent', () => {
  let component: AddVolsComponent;
  let fixture: ComponentFixture<AddVolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
