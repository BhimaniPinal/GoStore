import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { ProductFormComponent } from 'app/pages/product-form/product-form.component';
import { ProductsComponent } from 'app/pages/products/products.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: ':id',
    component: ProductFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

@NgModule({
  imports: [CommonModule, ProductRoutingModule, MaterialModule, FormsModule],
  declarations: [ProductsComponent, ProductFormComponent],
})
export class ProductModule {}
