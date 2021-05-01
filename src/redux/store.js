//imports createStore to create redux store, applyMiddleware is to console.log action.payloads with the logger.
import { createStore, applyMiddleware } from 'redux';
//logger is used to console.log action payloads.
import { logger } from 'redux-logger';
//root reducer is the main project reducer where all of the projects reducers flow into.
import  rootReducer  from './root-reducer';
//assinged logger value to middleware array incase we want to add more items here later.
const middlewares = [logger];
//creates your store, add in the rootReducer and the middleWare that calls all of the middleWare tools.
const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
