import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ChatComponent } from './component/chat/chat.component';
import { NotFindComponent } from './error/not-find/not-find.component';
import { UsersModule } from './users/users.module';
import { TrainingModule } from './component/training.module';

const routes: Routes = [
  { path: '', component: ChatComponent },
  { path: 'users', loadChildren: () => UsersModule },
  { path: 'training', loadChildren: () => TrainingModule },
  { path: '**', component: NotFindComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
