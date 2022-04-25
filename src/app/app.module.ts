import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';
import { QuestionPageComponent } from './views/question-page/question-page.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResultsComponent } from './views/results/results.component';
import { ErrorPageComponent } from './views/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    QuestionPageComponent,
    NavbarComponent,
    ResultsComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
