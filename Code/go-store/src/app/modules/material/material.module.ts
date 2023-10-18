import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [CommonModule],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule],
})
export class MaterialModule {}
