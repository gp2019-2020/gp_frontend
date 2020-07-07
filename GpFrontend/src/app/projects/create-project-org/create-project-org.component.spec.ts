import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProjectOrgComponent } from './create-project-org.component';

describe('CreateProjectOrgComponent', () => {
  let component: CreateProjectOrgComponent;
  let fixture: ComponentFixture<CreateProjectOrgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProjectOrgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProjectOrgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
