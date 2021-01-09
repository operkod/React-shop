import { combineReducers } from "redux"

import { app } from "./app"
import { cart } from "./cart"

const rootReducer = combineReducers({
  app,
  cart
})

export default rootReducer
