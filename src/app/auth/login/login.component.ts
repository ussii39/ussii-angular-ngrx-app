import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/service/auth.service';
import { Session } from 'src/app/model/session..model';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  loading = true;
  loginState = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', {
        validators: [Validators.required],
      }),
    });
  }

  login() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    }),
      this.authService.sessionState.subscribe((session: Session) => {
        if (session) {
          this.loginState = session.login;
          console.log('開始');
          this.loading = false;
        }
      });
  }
}
// sublogin(f: NgForm) {
//   this.authService.sublogin();
// }

// onSubmit(loginForm: NgForm) {
//   this.authService.sublogin();

//   console.log(this.keySet);
// }
