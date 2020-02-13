import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatePersonLinkedComponent } from './template-person-linked.component';

describe('TemplatePersonLinkedComponent', () => {
  let component: TemplatePersonLinkedComponent;
  let fixture: ComponentFixture<TemplatePersonLinkedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatePersonLinkedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatePersonLinkedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
