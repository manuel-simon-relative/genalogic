import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventListComponent } from './template-event-list.component';

describe('TemplateEventListComponent', () => {
  let component: TemplateEventListComponent;
  let fixture: ComponentFixture<TemplateEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
