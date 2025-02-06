import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { take, tap, filter, switchMap, catchError } from 'rxjs/operators';
import { ExamStoreService } from '../services/exam.store.service';
import { exams } from '../consts/exam.consts';
@Injectable({ providedIn: 'root' })
export class ExamResolver implements Resolve<any> {

  constructor(private storeService: ExamStoreService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.storeService.selectExamData().pipe(
      take(1),
      tap((exams) => {
        if (!exams || exams.length === 0) {
          this.storeService.getExamData()
        }
      }),
      filter((exams) => !!exams && exams.length > 0),
      take(1),
      catchError(() => of([]))
    );


  // resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   return exams
  }
}