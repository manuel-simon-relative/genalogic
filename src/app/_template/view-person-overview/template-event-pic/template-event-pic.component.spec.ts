import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventPicComponent } from './template-event-pic.component';

describe('TemplateEventPicComponent', () => {
  let component: TemplateEventPicComponent;
  let fixture: ComponentFixture<TemplateEventPicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventPicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
