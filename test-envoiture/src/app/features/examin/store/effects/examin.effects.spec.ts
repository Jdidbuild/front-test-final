import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable, of } from 'rxjs';
import { take } from 'rxjs/operators';
import * as action from '../actions/examin.action';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { ExaminEffects } from './examin.effect';
import { initialState } from '../reducers/examin.reducer';
import { DefaultService, Exam } from 'src/app/api-client';
import { exams } from '../../consts/exam.consts';

describe('ExaminEffects', () => {
  let actions$: Observable<any>;
  let effects: ExaminEffects;
  let examinDefaultService: jasmine.SpyObj<DefaultService>;

  beforeEach(() => {
    const examinServiceSpy = jasmine.createSpyObj('DefaultService', [
      'examsGet',
    ]);
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        ExaminEffects,
        { provide: DefaultService, useValue: examinServiceSpy },
        provideMockStore({ initialState }),
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(ExaminEffects);
    examinDefaultService = TestBed.inject(DefaultService) as jasmine.SpyObj<DefaultService>;
  });




  it('should test getExamData$ effect', () => {
    actions$ = of(
      action.getExaminList()
    );
    examinDefaultService.examsGet.and.returnValue(of(new HttpResponse<Exam[]>({
        status: 200,
        body: exams// Remplace par des données valides
      }) as HttpEvent<Exam[]>));
     effects.getExamList$.pipe(take(1)).subscribe((res: any) => {
      expect(res.type).toEqual(action.saveExamData.type);
    });
  });


});
