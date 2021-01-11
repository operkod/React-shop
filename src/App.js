import React from "react"
import { Route, Switch } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Home, Cart } from "./pages"
import { fetchProducts, setNavBar, setSortBy } from "./redux/action"

import "./scss/app.scss"

function App() {
  const dispatch = useDispatch()
  const { navBar, sortBy } = useSelector(({ app }) => app)
  React.useEffect(() => {
    dispatch(fetchProducts(navBar, sortBy))
  }, [navBar, sortBy])

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
