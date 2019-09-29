import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePersonshowerComponent } from './template-personshower.component';

describe('TemplatePersonshowerComponent', () => {
  let component: TemplatePersonshowerComponent;
  let fixture: ComponentFixture<TemplatePersonshowerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePersonshowerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePersonshowerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
