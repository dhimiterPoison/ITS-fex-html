import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItsPanelComponent } from './its-panel.component';

describe('ItsPanelComponent', () => {
  let component: ItsPanelComponent;
  let fixture: ComponentFixture<ItsPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItsPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItsPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
