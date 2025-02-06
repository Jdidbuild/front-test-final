import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExamComponent } from './features/examin/main/main-exam.component';

const routes: Routes = [
  {
    path: 'exam',
    loadChildren: () => import('./features/examin/exam.module').then(m => m.ExamModule)
  },
  { path: '**', redirectTo: 'exam' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
