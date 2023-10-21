import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Routing } from 'shared/constants/routing';
import { DashboardComponent } from 'app/pages/dashboard/dashboard.component';
import { PageNotFoundComponent } from 'app/pages/page-not-found/page-not-found.component';

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
    loadChildren: () =>
      import('./../page-modules/user.module').then((m) => m.UserModule),
  },
  {
    path: Routing.Category,
    loadChildren: () =>
      import('./../page-modules/category.module').then((m) => m.CategoryModule),
  },
  {
    path: Routing.Products,
    loadChildren: () =>
      import('./../page-modules/product.module').then((m) => m.ProductModule),
  },
  { path: '', redirectTo: Routing.Dashboard, pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableTracing: true,
    }),
    RouterModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
