import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from '../../utils/must-match.validator';
import {FirebaseService} from '../../core/firebase/firebase.service';
import {User} from '../../models/user/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private firebaseService: FirebaseService,
  ) {
  }

  // convenience getter for easy access to form fields
  get form() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required]],
    }, {
      validator: MustMatch('password', 'passwordConfirm'),
    });
  }

  onSubmit(form: FormGroup) {
    this.registerForm.markAllAsTouched();
    console.log(form);
    if (form.valid) {
      const signUpUser = {
        email: form.controls.email.value,
        password: form.controls.password.value,
      };
      const dbUser: User = {
        login: form.controls.login.value,
        email: form.controls.email.value,
        adventures: [],
        imageUrl: 'assets/img/default-user-icon-4.jpg',
      };

      this.firebaseService.signUpUser(signUpUser.email, signUpUser.password)
        .catch(error => {
          console.log('[ERROR IN USER SIGN UP]', error);
        })
        .finally(() => {
          console.log('[USER SIGNED UP SUCCESSFULLY]');
        });
      this.firebaseService.setUser(dbUser)
        .catch(error => {
          console.log('[ERROR IN USER DB SET]', error);
        })
        .finally(() => {
          console.log('[USER SAVED TO DB SUCCESSFULLY]');
        });
    }
  }

}

