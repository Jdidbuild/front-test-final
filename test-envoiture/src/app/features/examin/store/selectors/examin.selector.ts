import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

export const selectState = (state: AppState) => state.examin;

// get exam data
export const selectExaminData = createSelector(selectState, (state) => state.examin);
