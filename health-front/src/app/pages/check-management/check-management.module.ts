import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { InsertComponent } from './insert/insert.component';
import { CheckManagementRoutingModule } from './check-management-routing.module';
import { CheckDatatableModule } from '../../shared/components/check-datatable/check-datatable.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BtnLoadingModule } from '../../shared/components/btn-loading/btn-loading.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [OutstandingComponent, InsertComponent],
  imports: [
    CommonModule,
    CheckManagementRoutingModule,
    CheckDatatableModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    BtnLoadingModule,
    FormsModule,
    NgxMaskModule.forRoot()

  ]
})
export class CheckManagementModule { }
