//import { type Action } from 'stweb-redux-helper';
//import { CREATE_MESSAGE } from '../message/actionDefinitions';
//import { type ActionCreateMessagePayload } from '../message/actionCreators';

const prova = (f) => {
    return ({getState, dispatch}) => (next) => (action) => {
        f(action);
        return next(action);
    };
};

/*
const prova = ({getState, dispatch}) => (next) => (action) => {
    console.log(action);
    return next(action);
};*/
export default prova;