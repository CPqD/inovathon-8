import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as shajs from 'sha.js';
import { AuthService } from '../../../../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  public loading: boolean;
  constructor(private router: Router, private auth: AuthService, private toaster: ToastrService) { }

  ngOnInit() {
  }
  public login(username, password): void {
    this.loading = true;
    const passwordSha: string = shajs('sha256').update(password).digest('hex');
    const paramLogin = {
      username,
      password: passwordSha
    };
    this.auth.login(paramLogin)
      .then(() => {
        this.router.navigateByUrl('check-management/outstanding');
      })
      .catch((error: HttpErrorResponse) => {
        this.toaster.error(error.error.message, 'ERRO!', { timeOut: 5000, closeButton: true, progressBar: true });
      })
      .finally(() => {
        this.loading = false;
      });
  }

}
