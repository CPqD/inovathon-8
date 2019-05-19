import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderSidebarComponent } from './header-sidebar.component';
import { HeaderSidebarLargeComponent } from './header-sidebar-large/header-sidebar-large.component';
import { SidebarLargeComponent } from './sidebar-large/sidebar-large.component';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RelativeTimePipe } from '../../pipes/relative-time.pipe';
import { ExcerptPipe } from '../../pipes/excerpt.pipe';
const components = [
  HeaderSidebarComponent,
  HeaderSidebarLargeComponent,
  SidebarLargeComponent,
  RelativeTimePipe,
  ExcerptPipe
];

@NgModule({
  imports: [
    CommonModule,
    PerfectScrollbarModule,
    RouterModule,
    NgbModule
  ],
  declarations: components,
  exports: components
})
export class HeaderSidebarModule { }
