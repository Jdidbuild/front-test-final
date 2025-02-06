import { Action, ActionReducer, createReducer, on } from '@ngrx/store';
import { ExamState } from '..';
import * as actions from '../actions/examin.action';
import { setWith, clone } from 'lodash';
import * as _ from 'lodash';

export const initialState: ExamState = {
  examin: [],
};

export const ExaminReducer: ActionReducer<ExamState, Action> = createReducer(
  initialState,
  // update state exam list
  on(actions.saveExamData, (state: ExamState, action) =>
    _.setWith(_.clone(state), 'examin', action.exam, _.clone)
),
  
);


