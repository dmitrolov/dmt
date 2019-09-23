import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MustMatch} from 'src/app/utils/must-match.validator';
import {Player} from '../../models/player/player.model';
import {FirebaseService} from '../../core/firebase/firebase.service';
import {switchMap} from 'rxjs/operators';

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
  get f() {
    return this.registerForm.controls;
  }

  ngOnInit() {
    this.registerForm = this.fb.group({
      login: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      passwordConfirm: ['', [Validators.required]],
      role: 'user',
    }, {
      validator: MustMatch('password', 'passwordConfirm'),
    });
  }

  onSubmit(form: FormGroup) {
    this.markFormGroupTouchedAndDirty(form);
    console.log(form);
    if (form.valid) {
      const player: Player = {
        login: form.controls.login.value,
        email: form.controls.email.value,
        password: form.controls.password.value,
        role: form.controls.role.value
      };

      this.firebaseService.createUserWithEmailAndPassword(player.email, player.password)
        .pipe(
          switchMap((r1) => this.firebaseService.signInWithEmailAndPassword(player.email, player.password)),
          switchMap((r2) => this.firebaseService.updateUserProfile(player.login))
        )
        .subscribe(r1 => {
          this.firebaseService.signOut();
        });
    }
  }

  private markFormGroupTouchedAndDirty(formGroup: FormGroup) {
    for (const field of Object.keys(formGroup.controls)) {
      formGroup.controls[field].markAsTouched();
      formGroup.controls[field].markAsDirty();
    }
  }

}

