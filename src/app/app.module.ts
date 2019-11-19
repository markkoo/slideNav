import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestNavComponent } from './test-nav/test-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavComponent } from './nav/nav.component';
import { NavGroupComponent } from './nav-group/nav-group.component';
import { NavContainerComponent } from './nav-container/nav-container.component';

@NgModule({
  declarations: [
    AppComponent,
    TestNavComponent,
    NavComponent,
    NavGroupComponent,
    NavContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
