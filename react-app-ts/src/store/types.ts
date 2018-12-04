import { ITimer } from '../modules/timer/types';
import { ICounter } from '../modules/counter/types';
import { IDelay } from '../modules/delay/types';

export interface IAppState { 
    counter: ICounter;
    timer: ITimer;
    delay: IDelay
};