import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TrainingComponent } from './both-traning/training.component';
import { TrainingRoutingModule } from './training.routing.module';
import { NewTraningComponent } from './new-trainig/new-traning.component';
import { PastTraningComponent } from './past-traning/past-traning.component';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [TrainingComponent],
  imports: [
    CommonModule,
    FormsModule,
    TrainingRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    TrainingRoutingModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TrainingModule {}
