import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextInsertComponent } from './text-insert.component';

describe('TextInsertComponent', () => {
  let component: TextInsertComponent;
  let fixture: ComponentFixture<TextInsertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextInsertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
