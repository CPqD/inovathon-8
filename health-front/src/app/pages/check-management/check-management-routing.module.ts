import { NgModule } from '@angular/core';
import { OutstandingComponent } from './outstanding/outstanding.component';
import { Routes, RouterModule } from '@angular/router';
import { InsertComponent } from './insert/insert.component';
import { CheckService } from '../../services/check.service';

export const routes: Routes = [
  {path: 'outstanding', component: OutstandingComponent},
  {path: 'insert', component: InsertComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CheckService]
})
export class CheckManagementRoutingModule {}

