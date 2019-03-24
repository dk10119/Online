import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycvPage } from './mycv.page';

describe('MycvPage', () => {
  let component: MycvPage;
  let fixture: ComponentFixture<MycvPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycvPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
