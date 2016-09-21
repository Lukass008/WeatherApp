import { applyMiddleware, createStore } from "redux"

import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"

import reducer from "./reducers/weatherReducer"

const middleware = applyMiddleware(promise(), thunk)	// <--- add logger() middleware to see store changes (just like below)
// const middleware = applyMiddleware(promise(), thunk, logger())

export default createStore(reducer, middleware)
