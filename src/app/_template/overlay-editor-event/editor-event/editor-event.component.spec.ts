import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorEventComponent } from './editor-event.component';

describe('EditorEventComponent', () => {
  let component: EditorEventComponent;
  let fixture: ComponentFixture<EditorEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
