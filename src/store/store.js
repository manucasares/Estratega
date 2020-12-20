import { combineReducers, createStore } from 'redux';

import { uiReducer } from '../reducers/uiReducer';
import { playersReducer } from '../reducers/playersReducer';
import { configReducer } from '../reducers/configReducer';


const reducers = combineReducers({
    ui: uiReducer,
    players: playersReducer,
    config: configReducer
})


export const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)