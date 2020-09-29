import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

  signup(f: NgForm): void {
    this.userService.create(f.value.email, f.value.password);
  }
}
