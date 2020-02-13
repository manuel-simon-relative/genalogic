import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonListComponent } from './view-person-list.component';

describe('ViewPersonListComponent', () => {
  let component: ViewPersonListComponent;
  let fixture: ComponentFixture<ViewPersonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
