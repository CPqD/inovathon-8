import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginModule } from './pages/login/login.module';
import { CheckManagementModule } from './pages/check-management/check-management.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { HttpConfigInterceptor } from './interceptors/http.config';
import { HeaderSidebarModule } from './shared/components/header-sidebar/header-sidebar.module';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { ToastrModule } from 'ngx-toastr';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
  declarations: [
    AppComponent,
    Error404Component
  ],
  imports: [
    HeaderSidebarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    CheckManagementModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true },
    { provide: LOCALE_ID, useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
