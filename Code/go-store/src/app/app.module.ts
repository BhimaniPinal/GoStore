import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from 'app/modules/material/material.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { HeaderComponent } from './layouts/header/header.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { CategoryComponent } from './pages/category/category.component';
@NgModule({
  declarations: [AppComponent, MainLayoutComponent, CategoryComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    HeaderComponent,
    SidebarComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
