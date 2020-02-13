import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPersonOverviewComponent } from './view-person-overview.component';

describe('ViewPersonOverviewComponent', () => {
  let component: ViewPersonOverviewComponent;
  let fixture: ComponentFixture<ViewPersonOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPersonOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPersonOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
