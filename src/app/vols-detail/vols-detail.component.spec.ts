import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsDetailComponent } from './vols-detail.component';

describe('VolsDetailComponent', () => {
  let component: VolsDetailComponent;
  let fixture: ComponentFixture<VolsDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolsDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
