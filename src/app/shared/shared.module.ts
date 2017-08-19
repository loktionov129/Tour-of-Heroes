import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule } from '@angular/material';

@NgModule({
  imports: [ CommonModule, MdButtonModule, MdInputModule  ],
  exports: [ CommonModule, FormsModule, MdButtonModule, MdInputModule ]
})
export class SharedModule { }
