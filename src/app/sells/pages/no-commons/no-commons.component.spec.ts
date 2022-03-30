import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoCommonsComponent } from './no-commons.component';

describe('NoCommonsComponent', () => {
  let component: NoCommonsComponent;
  let fixture: ComponentFixture<NoCommonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoCommonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoCommonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
