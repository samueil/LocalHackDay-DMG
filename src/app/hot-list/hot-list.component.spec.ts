/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HotListComponent } from './hot-list.component';

describe('HotListComponent', () => {
  let component: HotListComponent;
  let fixture: ComponentFixture<HotListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
