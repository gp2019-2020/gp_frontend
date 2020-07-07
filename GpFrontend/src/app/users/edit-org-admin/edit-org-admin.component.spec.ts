import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOrgAdminComponent } from './edit-org-admin.component';

describe('EditOrgAdminComponent', () => {
  let component: EditOrgAdminComponent;
  let fixture: ComponentFixture<EditOrgAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditOrgAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditOrgAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
