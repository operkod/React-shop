import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Route, Switch } from "react-router-dom"

import { Home, Cart } from "./pages"
import { fetchProducts } from "./redux/action"

import "./scss/app.scss"

function App() {
  const { items, navBar, sortBy, isLoaded } = useSelector(({ app }) => app)
  const sortItems = [
    { name: "Ретабельности", type: "name" },
    { name: "Цена", type: "price" },
    { name: "Популярности", type: "popular" }
  ]
  const navItem = [
    { name: "Пицца", type: "pizzas" },
    { name: "Напитки", type: "drinks" },
    { name: "Десерты", type: "desserts" },
    { name: "Комбо", type: "combo" }
  ]
  const dispatch = useDispatch()
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
          <Home
            items={items}
            navBar={navBar}
            sortBy={sortBy}
            isLoaded={isLoaded}
            sortItems={sortItems}
            navItem={navItem}
          />
        </Route>
      </Switch>
    </div>
  )
}

export default App
