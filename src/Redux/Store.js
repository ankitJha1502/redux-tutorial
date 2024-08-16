import { createStore,applyMiddleware } from 'redux'
import rootReducer from './combinedReducer'
import {thunk} from 'redux-thunk'
import logger from 'redux-logger'
import { composeWithDevTools } from "@redux-devtools/extension";

const Store=createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

export default Store
