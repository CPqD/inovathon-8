import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BtnLoadingComponent } from './btn-loading.component';
const components = [
  BtnLoadingComponent
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: components,
  exports: components
})
export class BtnLoadingModule { }
