import { Injectable } from '@angular/core';
import { AppState } from '../../../store/app.reducer';
import * as actions from '../store/actions/examin.action';
import * as selectors from '../store/selectors/examin.selector';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Exam } from 'src/app/api-client';

@Injectable({
  providedIn: 'root',
})
export class ExamStoreService {
  constructor(private store: Store<AppState>) {}

 


  selectExamData(): Observable<Exam[]> {
    return this.store.select(selectors.selectExaminData);
  }

  getExamData(): void {
    this.store.dispatch(actions.getExaminList());
  }



}
