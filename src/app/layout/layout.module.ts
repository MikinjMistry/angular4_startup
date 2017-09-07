import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app.routing';
import { NavbarModule } from './shared/navbar/navbar.module';
import { FooterModule } from './shared/footer/footer.module';
import { SidebarModule } from './sidebar/sidebar.module';

import { HomeComponent } from './home/home.component';
import { LayoutComponent } from './layout.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    HomeComponent,
    LayoutComponent,
  ],
  imports: [
    FormsModule,
    HttpModule,
    NavbarModule,
    FooterModule,
    SidebarModule,
    RouterModule,
    AppRoutingModule,
    DataTablesModule
  ],
  providers: [],
})

export class LayoutModule { }