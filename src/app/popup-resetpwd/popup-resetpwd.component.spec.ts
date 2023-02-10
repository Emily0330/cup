import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupResetpwdComponent } from './popup-resetpwd.component';

describe('PopupResetpwdComponent', () => {
  let component: PopupResetpwdComponent;
  let fixture: ComponentFixture<PopupResetpwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupResetpwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopupResetpwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
