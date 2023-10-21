import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MainLayoutComponent } from 'app/layouts/main-layout/main-layout.component';
import { HeaderComponent } from 'app/layouts/header/header.component';
import { SidebarComponent } from 'app/layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';

@NgModule({
  declarations: [MainLayoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [MainLayoutComponent],
})
export class ComponentsModule {}
