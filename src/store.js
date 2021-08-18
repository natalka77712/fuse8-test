import {applyMiddleware, combineReducers, createStore} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {estateReducer} from "./components/estate/estate-reducer";

const rootReducer = combineReducers({
    estate: estateReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

