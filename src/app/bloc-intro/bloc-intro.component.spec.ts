import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocIntroComponent } from './bloc-intro.component';

describe('BlocIntroComponent', () => {
  let component: BlocIntroComponent;
  let fixture: ComponentFixture<BlocIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
