import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from 'app/modules/material/material.module';
import { AppRoutingModule } from './modules/routing/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_SERIVCE_CONFIG, APP_CONFIG } from 'utils/appconfig.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './modules/component/component.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CommonModule } from '@angular/common';
@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [{ provide: APP_SERIVCE_CONFIG, useValue: APP_CONFIG }],
  bootstrap: [AppComponent],
})
export class AppModule {}
