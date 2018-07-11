import { myActionDispatched } from '../reducers/actions';

const interceptor = store => next => action => {

    //se faccio la dispatch qui invece non viene richiamato da fuori il precedente
    //next perché è salvato nella variabile result dopo
    //questa dispatch che fa ripartire un nuovo ciclo interrompendo il precedente
    //processando quindi la MY_ACTION_DISPATCHED prima dell'altra e cambiando lo stato, vedi il campo action nello stato!!!
    /*if (action.type === 'MY_ACTION') {
        console.log('INTERCEPTED ACTION: MY_ACTION -> DISPATCH MY_ACTION_DISPATCHED');
        store.dispatch(myActionDispatched('action dispatched from middleware'));    
    }*/

    /**
     * così la passo ai middleware successivi e rifà il giro dei reducer:
     * attenzione non viene passata a tutti i middleware ma solo a quelli successivi nell'inizializzazione
     */
    if (action.type === 'MY_ACTION') {
        console.log('INTERCEPTED ACTION: MY_ACTION -> DISPATCH MY_ACTION_DISPATCHED');
        next(myActionDispatched('action dispatched from middleware'));    
    }

    console.log('interceptor FOUND ACTION:' + action.type);

    let result = next(action);

    //priva viene fatta la nuova dispatch della nuova action
    //poi viene chiamata la next da fuori ritornata in result
    //che fa il cambio di stato con il reducer associato alla prima action
    //però la action si perde???!!?!?
    /*if (action.type === 'MY_ACTION') {
        console.log('INTERCEPTED ACTION MY_ACTION AFTER NEXT');
        store.dispatch(myActionDispatched('action dispatched from middleware'));    
    }*/

    return result;
  }

export default interceptor;