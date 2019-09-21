import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePersonSelComponent } from './template-person-sel.component';

describe('TemplatePersonSelComponent', () => {
  let component: TemplatePersonSelComponent;
  let fixture: ComponentFixture<TemplatePersonSelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePersonSelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePersonSelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
