import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { SignInComponent } from './sign-in.component';

describe('SignInComponent', () => {
  let component: SignInComponent;
  let fixture: ComponentFixture<SignInComponent>;
  let De: DebugElement;

  beforeEach(async(() =>
    TestBed.configureTestingModule({
      imports: [ ReactiveFormsModule, FormsModule ],
      declarations: [ SignInComponent ],
    }).compileComponents()
  ));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInComponent);
    component = fixture.componentInstance;
    De = fixture.debugElement;

    fixture.detectChanges();
  });

  it('should create', () => expect(component).toBeTruthy());

  it('should contain valid labels', () => {
    expect(De.query(By.css('h3')).nativeElement.innerText).toBe('Sign in');
    expect(De.query(By.css('button')).nativeElement.innerText).toBe('Sign in');
    expect(De.query(By.css('a')).nativeElement.innerText).toBe('Sign up');
  });

  it('should contain valid placeholders', () => {
    expect(De.query(By.css('input[formControlName = userName]')).nativeElement.placeholder).toBe('Username');
    expect(De.query(By.css('input[formControlName = userPassword]')).nativeElement.placeholder).toBe('Password');
  });

  it('should have valid anchors', () => expect(De.query(By.css('a')).nativeElement.href).toBeTruthy());
});
