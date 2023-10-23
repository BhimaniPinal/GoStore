import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from 'shared/constants/routing';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';

const userModule = () =>
  import('./../page-modules/user.module').then((m) => m.UserModule);
const categoryModule = () =>
  import('./../page-modules/category.module').then((m) => m.CategoryModule);
const productModule = () =>
  import('./../page-modules/product.module').then((m) => m.ProductModule);

const routes: Routes = [
  {
    path: Routing.Dashboard,
    component: DashboardComponent,
  },
  // {
  //   path: Routing.Users,
  //   component: UsersComponent,
  // },
  // {
  //   path: Routing.UserManage,
  //   component: UserFormComponent,
  // },
  // {
  //   path: Routing.Products,
  //   component: ProductsComponent,
  // },
  // {
  //   path: Routing.Category,
  //   component: CategoryComponent,
  // },
  {
    path: Routing.Users,
    loadChildren: userModule,
  },
  {
    path: Routing.Category,
    loadChildren: categoryModule,
  },
  {
    path: Routing.Products,
    loadChildren: productModule,
  },
  // {
  //   path: Routing.Products,
  //   loadChildren: () =>
  //     import('../../pages/products/products.component').then(
  //       (m) => m.ProductsComponent
  //     ),
  // },
  // {
  //   path: Routing.ProductManage,
  //   loadComponent: () =>
  //     import('../../pages/product-form/product-form.component').then(
  //       (m) => m.ProductFormComponent
  //     ),
  // },
  { path: '', redirectTo: Routing.Dashboard, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
