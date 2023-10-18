import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from 'app/pages/users/users.component';
import { ProductsComponent } from 'app/pages/products/products.component';
import { Routing } from 'shared/constants/routing';

const routes: Routes = [
  {
    path: Routing.Users,
    component: UsersComponent,
  },
  {
    path: Routing.Products,
    component: ProductsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
  // declarations: [UsersComponent, ProductsComponent],
})
export class AppRoutingModule {}
