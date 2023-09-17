import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompNavbarComponent } from './comp-navbar.component';

describe('CompNavbarComponent', () => {
  let component: CompNavbarComponent;
  let fixture: ComponentFixture<CompNavbarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CompNavbarComponent]
    });
    fixture = TestBed.createComponent(CompNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
