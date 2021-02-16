import React from "react"
import { useDispatch, useSelector } from "react-redux"

import { addProductToCart, setSortBy, setNavBar } from "redux/action"
import { Header, LoaderProduct, Product, SortBy } from "components"

import "./Home.scss"
const Home = () => {
  const sortItems = [
    { name: "Рентабельности", type: "name" },
    { name: "Цена", type: "price" },
    { name: "Популярности", type: "popular" }
  ]
  const navItems = [
    { name: "Пицца", type: "pizzas" },
    { name: "Напитки", type: "drinks" },
    { name: "Десерты", type: "desserts" },
    { name: "Комбо", type: "combo" }
  ]

  const { items, navBar, sortBy, isLoaded } = useSelector(({ app }) => app)
  const cartItems = useSelector(({ cart }) => cart.items)
  const productTitle = navItems.find((obj) => obj.type === navBar).name
  const dispatch = useDispatch()
  const onClickNav = (el) => {
    dispatch(setNavBar(el.type))
  }

  const setChangeSortBy = React.useCallback((el) => {
    dispatch(setSortBy(el))
  })
  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj))
  }

  return (
    <>
      <Header activeNavBar={navBar} handelNav={onClickNav} navItems={navItems} />
      <div className="container">
        <section className="home">
          <div className="home-top">
            <h1 className="title">{productTitle}</h1>
            <SortBy selectSort={sortBy} setChangeSortBy={setChangeSortBy} sortItems={sortItems} />
          </div>
          <div className="products">
            {isLoaded
              ? items.map((obj, index) => (
                  <Product
                    {...obj}
                    onClickAddProductCart={handleAddProductToCart}
                    count={cartItems[obj._id] && cartItems[obj._id].items.length}
                    key={`${obj._id}_${index}`}
                  />
                ))
              : Array(8)
                  .fill(0)
                  .map((_, index) => <LoaderProduct key={index} />)}
          </div>
        </section>
      </div>
    </>
  )
}
export default Home
