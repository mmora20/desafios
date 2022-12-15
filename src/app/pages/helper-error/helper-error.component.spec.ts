import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelperErrorComponent } from './helper-error.component';

describe('HelperErrorComponent', () => {
  let component: HelperErrorComponent;
  let fixture: ComponentFixture<HelperErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelperErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelperErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
