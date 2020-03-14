import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetraUiLibComponent } from './tetra-ui-lib.component';

describe('TetraUiLibComponent', () => {
  let component: TetraUiLibComponent;
  let fixture: ComponentFixture<TetraUiLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetraUiLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetraUiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
