import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { NewUserComponent } from './new-user/new-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [NewUserComponent],
  imports: [CommonModule, FormsModule, UsersRoutingModule, ReactiveFormsModule],
})
export class UsersModule {}
