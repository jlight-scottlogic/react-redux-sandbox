import { createStore, applyMiddleware } from "redux";
import { createRootReducer } from './root-reducer';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createBrowserHistory();

export const store = createStore(
    createRootReducer(history),
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
        )
    )
);