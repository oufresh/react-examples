import { createStore } from 'redux';
import reducer from "../schema/reducer";
import initSchema from "./initSchema.json";

export const store = createStore(reducer, {
    editing: false,
    geometries: initSchema
});
