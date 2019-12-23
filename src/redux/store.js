import { createStore, applyMiddleware } from "redux";
import { createRootReducer } from './root-reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';

export const history = createBrowserHistory();

export const configureStore = () => {

    const sagaMiddleware = createSagaMiddleware()

    const store = createStore(
        createRootReducer(history),
        composeWithDevTools(
            applyMiddleware(
                routerMiddleware(history),
                thunk,
                sagaMiddleware
            )
        )
    );

    sagaMiddleware.run(rootSaga)

    return store;
} 