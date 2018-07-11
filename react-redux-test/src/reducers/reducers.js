import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, MY_ACTION, VisibilityFilters, MY_ACTION_DISPATCHED } from './actions';
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
 switch (action.type) {
      case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (index === action.index) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          })
        }
        return todo
      })
    default:
      return state
  }
}

function myReducer(state = '', action)
{

  switch (action.type) {
    case MY_ACTION:
    return action.str;
      /*return {
        str: action.str,
        lastAction: 'MY_ACTION'
      };*/
    /*case MY_ACTION_DISPATCHED:
      return {
        str: state.str,
        lastAction: 'MY_ACTION_DISPATCHED'
      };*/
    default:
      return state;
  }
}

function write(state = {m:''}, action)
{
  //console.log(action.type);
  switch (action.type) {
    case MY_ACTION:
    return {
      m: action.type
    };
    case MY_ACTION_DISPATCHED:
    return {m:action.type};
    default:
      return state;
  }
}

const todoApp = combineReducers({
  visibilityFilter,
  todos,
  myReducer,
  write
});

export default todoApp;