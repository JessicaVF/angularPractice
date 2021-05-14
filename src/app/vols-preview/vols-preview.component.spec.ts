import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VolsPreviewComponent } from './vols-preview.component';

describe('VolsPreviewComponent', () => {
  let component: VolsPreviewComponent;
  let fixture: ComponentFixture<VolsPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VolsPreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VolsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
