import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateEventNormalComponent } from './template-event-normal.component';

describe('TemplateEventNormalComponent', () => {
  let component: TemplateEventNormalComponent;
  let fixture: ComponentFixture<TemplateEventNormalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateEventNormalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateEventNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
