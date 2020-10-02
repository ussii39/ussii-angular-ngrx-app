import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TrainingComponent } from './both-traning/training.component';

const routes: Routes = [{ path: 'a', component: TrainingComponent }];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
})
export class TrainingRoutingModule {}
