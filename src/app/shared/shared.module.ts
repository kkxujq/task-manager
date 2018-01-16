import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule,
  MatSlideToggleModule,
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatListModule,
    MatSlideToggleModule,
  ],
  declarations: []
})
export class SharedModule { }
