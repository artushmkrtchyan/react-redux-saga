import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension/developmentOnly";
import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

export function configureStore() {
    const sagaMiddleware = createSagaMiddleware();


    const middlewares = [sagaMiddleware];

    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)));

    sagaMiddleware.run(rootSaga);

    return store;
}