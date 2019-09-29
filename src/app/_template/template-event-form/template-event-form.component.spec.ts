import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventFormComponent } from './template-event-form.component';

describe('TemplateEventFormComponent', () => {
  let component: TemplateEventFormComponent;
  let fixture: ComponentFixture<TemplateEventFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
