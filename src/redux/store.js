//imports createStore to create redux store, applyMiddleware is to console.log action.payloads with the logger.
import { createStore, applyMiddleware } from "redux";

//Allows browser to chace store with certain config options were going to set.
import { persistStore } from "redux-persist";

//logger is used to console.log action payloads.
import { logger } from "redux-logger";
//root reducer is the main project reducer where all of the projects reducers flow into.
import rootReducer from "./root-reducer";
//assinged logger value to middleware array incase we want to add more items here later.
const middlewares = [logger];
//creates your store, add in the rootReducer and the middleWare that calls all of the middleWare tools. {export store once persistor is added, although we technically dont need to export it.}
const store = createStore(rootReducer, applyMiddleware(...middlewares));

//exports PersistStore while passing in the redux store. { technically this doesnt need to be exported either.}
const persistor = persistStore(store);

export { store, persistor };
