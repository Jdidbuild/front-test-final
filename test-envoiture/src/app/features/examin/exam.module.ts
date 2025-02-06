import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainExamComponent } from './main/main-exam.component';
import { ExamsRoutingModule } from './exam-routing.module';
import { DefaultService } from 'src/app/api-client';

import { ExamTableComponent } from './components/examin-table/examin-table.component';

@NgModule({
  declarations: [MainExamComponent,ExamTableComponent],
  imports: [CommonModule , ExamsRoutingModule ],
  providers:[DefaultService]
})
export class ExamModule {}
