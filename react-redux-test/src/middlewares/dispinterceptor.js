
const dispinterceptor = store => next => action => {
    if (action.type === 'MY_ACTION_DISPATCHED') {
        console.log('INTERCEPTED ACTION: MY_ACTION_DISPATCHED');
    }
    let result = next(action);

    return result;
  }

export default dispinterceptor;