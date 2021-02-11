import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Exercie4Component } from './exercie4.component';

describe('Exercie4Component', () => {
  let component: Exercie4Component;
  let fixture: ComponentFixture<Exercie4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Exercie4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Exercie4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
