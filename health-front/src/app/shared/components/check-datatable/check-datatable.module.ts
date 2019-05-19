import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckDatatableComponent } from './check-datatable.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [CheckDatatableComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDatatableModule,
    NgbDatepickerModule
  ],
  exports: [CheckDatatableComponent]
})
export class CheckDatatableModule { }
