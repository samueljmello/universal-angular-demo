import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { MaterialModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { AppRouting, AppRoutingProviders } from './app.routing';
@NgModule({
  imports: [
    BrowserModule,
    MaterialModule.forRoot(),
    RouterModule.forRoot(AppRouting)
  ],
  declarations: [
    AppComponent,
    DemoComponent
  ],
  providers: [
    AppRoutingProviders
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }