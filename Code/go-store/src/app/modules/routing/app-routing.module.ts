import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'app/pages/users/users.component';
import { ProductsComponent } from 'app/pages/products/products.component';
import { Routing } from 'shared/constants/routing';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { CategoryComponent } from 'app/pages/category/category.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
  },
  {
    path: Routing.Users,
    component: UsersComponent,
  },
  {
    path: Routing.Products,
    component: ProductsComponent,
  },
  {
    path: Routing.Category,
    component: CategoryComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
