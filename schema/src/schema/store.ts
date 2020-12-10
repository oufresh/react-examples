import { createStore } from 'redux';
import reducer from "./reducer";
import initSchema from "./initSchema.json";
export type StateType = Array<any>;
export const store = createStore(reducer, initSchema);
