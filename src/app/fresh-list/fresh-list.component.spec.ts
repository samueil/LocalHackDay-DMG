/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FreshListComponent } from './fresh-list.component';

describe('FreshListComponent', () => {
  let component: FreshListComponent;
  let fixture: ComponentFixture<FreshListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreshListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreshListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
