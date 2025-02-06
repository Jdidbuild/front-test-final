
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainExamComponent } from './main/main-exam.component';
import { ExamResolver } from './resolvers/exam.resolver';

const routes: Routes = [
  {
    path: '',
    component: MainExamComponent,
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamsRoutingModule {}