import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLargeComponent } from './sidebar-large.component';

describe('SidebarLargeComponent', () => {
  let component: SidebarLargeComponent;
  let fixture: ComponentFixture<SidebarLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
