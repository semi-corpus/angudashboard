import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocPerfComponent } from './bloc-perf.component';

describe('BlocPerfComponent', () => {
  let component: BlocPerfComponent;
  let fixture: ComponentFixture<BlocPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
