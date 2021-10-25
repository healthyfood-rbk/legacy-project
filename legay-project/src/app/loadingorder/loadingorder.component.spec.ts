import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingorderComponent } from './loadingorder.component';

describe('LoadingorderComponent', () => {
  let component: LoadingorderComponent;
  let fixture: ComponentFixture<LoadingorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadingorderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadingorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
