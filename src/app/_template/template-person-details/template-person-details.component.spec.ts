import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePersonDetailsComponent } from './template-person-details.component';

describe('TemplatePersonDetailsComponent', () => {
  let component: TemplatePersonDetailsComponent;
  let fixture: ComponentFixture<TemplatePersonDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePersonDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePersonDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
