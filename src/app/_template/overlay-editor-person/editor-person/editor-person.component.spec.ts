import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPersonComponent } from './editor-person.component';

describe('EditorPersonComponent', () => {
  let component: EditorPersonComponent;
  let fixture: ComponentFixture<EditorPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditorPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditorPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
