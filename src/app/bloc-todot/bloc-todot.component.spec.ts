import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocTodotComponent } from './bloc-todot.component';

describe('BlocTodotComponent', () => {
  let component: BlocTodotComponent;
  let fixture: ComponentFixture<BlocTodotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocTodotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocTodotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
