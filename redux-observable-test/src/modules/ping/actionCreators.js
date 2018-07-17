import { PING, PONG } from './actionDefinitions';

export const ping = () => ({ type: PING });

export const pong = () => ({ type: PONG });