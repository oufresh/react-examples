import { createAction, IAction } from '../../helper/actions';
import { TimerActions } from './actionDefinitions';

export const start = createAction<IAction<TimerActions>>(TimerActions.START);
export const stop = createAction<IAction<TimerActions>>(TimerActions.STOP);
export const inc = createAction<IAction<TimerActions>>(TimerActions.INC);