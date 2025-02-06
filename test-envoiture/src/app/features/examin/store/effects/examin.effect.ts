import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { DefaultService } from '../../../../api-client/api/api';
import * as actions from '../actions/examin.action';
import { Exam } from 'src/app/api-client';


@Injectable()

export class ExaminEffects {
  constructor(
    private actions$: Actions,
    private examService : DefaultService

  ) {}

 

  // get exam data
  getExamList$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.getExaminList),
      switchMap((action) =>
        this.examService.examsGet().pipe(
          map((response: any) => {
            const exam: Exam[] = response;
            return actions.saveExamData({ exam: exam });
          })
        )
      )
    )
  );




}
