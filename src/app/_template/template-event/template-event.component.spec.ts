import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventComponent } from './template-event.component';

describe('TemplateEventComponent', () => {
  let component: TemplateEventComponent;
  let fixture: ComponentFixture<TemplateEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
