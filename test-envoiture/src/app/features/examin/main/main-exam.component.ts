import { ChangeDetectorRef, Component, OnDestroy, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { exams } from './../consts/exam.consts'
import { Exam } from 'src/app/api-client';
import { ExamStoreService } from '../services/exam.store.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-main-exam',
  templateUrl: './main-exam.component.html',
  styleUrls: ['./main-exam.component.scss'],
})
export class MainExamComponent  {


  exams:Exam[]=[];
  private destroy$ = new Subject<void>();

  ;

  
  constructor(private readonly storeService:ExamStoreService  ) {}




  ngOnInit(): void {
    this.storeService
    .selectExamData()
    .pipe(takeUntil(this.destroy$))
    .subscribe((examin: Exam[]) => {
      if (examin?.length) {
        this.exams = [...examin];
      }
    });
  }



  DispatchAction(){
         this.storeService.getExamData();
  }



  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }





}
