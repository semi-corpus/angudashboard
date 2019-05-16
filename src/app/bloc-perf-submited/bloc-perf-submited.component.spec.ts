import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPerfSubmitedComponent } from './bloc-perf-submited.component';

describe('BlocPerfSubmitedComponent', () => {
  let component: BlocPerfSubmitedComponent;
  let fixture: ComponentFixture<BlocPerfSubmitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocPerfSubmitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocPerfSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
