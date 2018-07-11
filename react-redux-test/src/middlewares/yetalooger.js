const yetalogger = store => next => action => {
    console.log('yet another logger: dispatching', action)
    let result = next(action);
    console.log('yet another logger: next state', store.getState());
    return result;
  }

export default yetalogger;