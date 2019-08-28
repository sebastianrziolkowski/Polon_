import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SignUpComponent } from './sign-up.component';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;
  let De: DebugElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ SignUpComponent ],
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
    De = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should contain valid labels', () => {
    expect(De.query(By.css('h3')).nativeElement.innerText).toBe('Sign up');
    expect(De.query(By.css('button')).nativeElement.innerText).toBe('Sign up');
    expect(De.query(By.css('a')).nativeElement.innerText).toBe('Sign in');
  });

  it('should contain valid placeholders', () => {
    expect(De.query(By.css('input[formControlName = userName]')).nativeElement.placeholder).toBe('Username');
    expect(De.query(By.css('input[formControlName = userPassword]')).nativeElement.placeholder).toBe('Password');
    expect(De.query(By.css('input[formControlName = userPasswordConfirm]')).nativeElement.placeholder).toBe('Confirm password');
    expect(De.query(By.css('input[formControlName = userEmail]')).nativeElement.placeholder).toBe('Email address');
    expect(De.query(By.css('label > span')).nativeElement.innerText).toBe('Birth date');
  });

  it('should have valid anchors', () => expect(De.query(By.css('a')).nativeElement.href).toBeTruthy());
});
