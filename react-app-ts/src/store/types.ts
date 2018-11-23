import { ITimer } from '../modules/timer/types';
import { ICounter } from '../modules/counter/types';

export interface IAppState { 
    counter: ICounter;
    timer: ITimer;
  };