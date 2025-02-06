import { ChangeDetectorRef, Component, Input, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { exams } from './../../consts/exam.consts'
import { Exam } from 'src/app/api-client';
import { ExamStoreService } from '../../services/exam.store.service';
import { getIconClass, getStatusClass } from '../../utils/status-class';
@Component({
  selector: 'app-examin-table',
  templateUrl: './examin-table.component.html',
  styleUrls: ['./examin-table.component.css'],
})
export class ExamTableComponent  {


   exams:Exam[]=[];
   getStatusClass = getStatusClass;
   getIconClass = getIconClass;

   @Input() set examData(exam: Exam[]) {
    if (exam) {
      this.exams = exam;
    } 
  }
  
  constructor(private storeService:ExamStoreService  ) {}

  ngOnInit(): void {
    this.storeService.getExamData();

  }






 
}
