import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { BtnLoadingModule } from '../../shared/components/btn-loading/btn-loading.module';
import { ToastrService } from 'ngx-toastr';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    BtnLoadingModule,

  ],
  providers: [ToastrService]
})

export class LoginModule { }
