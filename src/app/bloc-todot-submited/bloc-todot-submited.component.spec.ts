import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocTodotSubmitedComponent } from './bloc-todot-submited.component';

describe('BlocTodotSubmitedComponent', () => {
  let component: BlocTodotSubmitedComponent;
  let fixture: ComponentFixture<BlocTodotSubmitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocTodotSubmitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocTodotSubmitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
