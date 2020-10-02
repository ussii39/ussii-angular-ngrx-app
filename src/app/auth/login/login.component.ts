import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/service/auth.service';

export class PrivateAPIKeySet {
  constructor(public key: string, public secret: string) {}
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  keySet = new PrivateAPIKeySet('', '');
  hide = true;
  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login(f: NgForm): void {
    this.authService.login(f.value.email, f.value.password);
  }

  // sublogin(f: NgForm) {
  //   this.authService.sublogin();
  // }

  // onSubmit(loginForm: NgForm) {
  //   this.authService.sublogin();

  //   console.log(this.keySet);
  // }
}
