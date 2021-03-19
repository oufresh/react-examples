import { createStore, applyMiddleware } from 'redux';
import logger from "redux-logger";
import reducer from "../schema/module/reducer";
import initSchema from "./initSchema.json";

export const store = createStore(reducer, {
    editing: false,
    geometries: initSchema,
    editingGeometries: [],
    selected:[]
}, applyMiddleware(logger));
