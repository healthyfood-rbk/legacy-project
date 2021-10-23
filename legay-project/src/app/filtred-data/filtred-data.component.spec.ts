import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltredDataComponent } from './filtred-data.component';

describe('FiltredDataComponent', () => {
  let component: FiltredDataComponent;
  let fixture: ComponentFixture<FiltredDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltredDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
