import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LayoutComponent]
})
export class LayoutModule { }
