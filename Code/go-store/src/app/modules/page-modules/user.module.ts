import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserFormComponent } from 'app/pages/user-form/user-form.component';
import { UsersComponent } from 'app/pages/users/users.component';
import { MaterialModule } from '../material/material.module';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
  },
  {
    path: ':id',
    component: UserFormComponent,
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}

@NgModule({
  imports: [CommonModule, UserRoutingModule, MaterialModule],
  declarations: [UsersComponent, UserFormComponent],
})
export class UserModule {}
