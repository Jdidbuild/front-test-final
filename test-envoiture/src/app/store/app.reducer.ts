import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import * as examin from '../../app/features/examin/store/index';


import {
  EXAMIN_STORE,

} from '../utils/consts/store-name.const';


// Initialize the App State
export interface AppState {
  
  [EXAMIN_STORE]: examin.ExamState;
 

 
}

// Initialize the Reducers
export const reducers: ActionReducerMap<AppState> = {

  [EXAMIN_STORE]: examin.ExaminReducer,
};

// Initialize the metaReducers
export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];

// Initialize the Effects
export const effects: any[] = [
  examin.ExaminEffects,
  
];
