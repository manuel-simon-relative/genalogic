import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventPicsComponent } from './template-event-pics.component';

describe('TemplateEventPicsComponent', () => {
  let component: TemplateEventPicsComponent;
  let fixture: ComponentFixture<TemplateEventPicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventPicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventPicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
