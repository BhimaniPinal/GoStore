import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MainLayoutComponent } from 'app/layouts/main-layout/main-layout.component';
import { HeaderComponent } from 'app/layouts/header/header.component';
import { SidebarComponent } from 'app/layouts/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
// import { ProductDetailsComponent } from 'app/pages/product-details/product-details.component';
import { DialogFormComponent } from 'app/components/dialog-form/dialog-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [MainLayoutComponent, DialogFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RouterModule,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [MainLayoutComponent, DialogFormComponent],
})
export class ComponentsModule {}
