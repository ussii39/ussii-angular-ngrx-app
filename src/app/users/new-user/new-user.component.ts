import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/core/service/user.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  submitForm(f: NgForm) {
    this.userService.update(f.value);
  }
}
