import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from './views/error-page/error-page.component';
import { QuestionPageComponent } from './views/question-page/question-page.component';
import { ResultsComponent } from './views/results/results.component';
import { WelcomePageComponent } from './views/welcome-page/welcome-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: "full" },
  { path: 'welcome', component: WelcomePageComponent },
  { path: 'question', component: QuestionPageComponent },
  { path: 'result', component: ResultsComponent },
  { path: 'error', component: ErrorPageComponent },
  { path: '**', redirectTo: 'error' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
