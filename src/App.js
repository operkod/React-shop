import React from "react"
import { Route, Switch } from "react-router-dom"

import { Home, Cart } from "./pages"

import "./scss/app.scss"

function App() {
  return (
    <div className="wrapper">
      <Switch>
        <Route switch path="/cart">
          <Cart />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  )
}

export default App
