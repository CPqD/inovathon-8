import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';
import { LOGIN_STATES} from './pages/login/login-states';
import { HeaderSidebarComponent } from './shared/components/header-sidebar/header-sidebar.component';
import { CheckManagementModule } from './pages/check-management/check-management.module';
import { AuthService } from './services/auth.service';

const adminRoutes: Routes = [
  {
    path: 'check-management',
    loadChildren: () => CheckManagementModule
  }
];

const routes: Routes = [
  {path: '', redirectTo: '/check-management/insert', pathMatch: 'full'},
  {
    path: '',
    component: HeaderSidebarComponent,
    children: adminRoutes
  },
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
