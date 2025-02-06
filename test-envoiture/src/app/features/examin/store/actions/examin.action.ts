import { createAction, props } from '@ngrx/store';
import { Exam } from 'src/app/api-client';

const EXAMIN_PREFIX = '[EXAMIN]';



// get examins list
const GET_EXAMIN_LIST = `${EXAMIN_PREFIX} GET_EXAMIN_LIST`;
export const getExaminList = createAction(
    GET_EXAMIN_LIST,
);




// save examins data
const SAVE_EXAM_DATA = `${EXAMIN_PREFIX} SAVE_EXAMIN_DATA`;
export const saveExamData = createAction(SAVE_EXAM_DATA, props<{ exam: Exam[] }>());


