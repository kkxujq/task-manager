import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatInputModule
} from '@angular/material'; 

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  exports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],
  declarations: []
})
export class SharedModule { }
