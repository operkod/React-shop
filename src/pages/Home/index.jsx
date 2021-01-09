import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, fetchProducts, setNavBar, setSortBy } from "../../redux/action"
import { Header, LoaderProduct, Product, SortBy } from "../../components"

const Home = () => {
  const navItems = [
    { name: "Пицца", type: "pizzas" },
    { name: "Напитки", type: "drinks" },
    { name: "Десерты", type: "desserts" },
    { name: "Комбо", type: "combo" }
  ]
  const sortItems = [
    { name: "Ретабельности", type: "name" },
    { name: "Цена", type: "price" },
    { name: "Популярности", type: "popular" }
  ]
  const dispatch = useDispatch()
  const { items, navBar, sortBy, isLoaded } = useSelector(({ app }) => app)
  React.useEffect(() => {
    dispatch(fetchProducts(navBar, sortBy))
  }, [navBar, sortBy])
  const productTitle = navItems.find((obj) => obj.type === navBar).name

  const onChangeNav = (el) => {
    dispatch(setNavBar(el.type))
  }
  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj))
  }
  const setChangeSortBy = (el) => {
    dispatch(setSortBy(el))
  }

  return (
    <>
      <Header activeNavBar={navBar} onChangeClick={onChangeNav} navItems={navItems} />
      <main className="container">
        <section className="products">
          <div className="title">
            <h1>{productTitle}</h1>
            <SortBy selectSort={sortBy} setChangeSortBy={setChangeSortBy} sortItems={sortItems} />
          </div>
          <div className="products__wrap">
            {isLoaded
              ? items.map((obj, index) => (
                  <Product
                    {...obj}
                    onClickAddProductCar={handleAddProductToCart}
                    key={`${obj._id}_${index}`}
                  />
                ))
              : Array(8)
                  .fill(0)
                  .map((_, index) => <LoaderProduct key={index} />)}
          </div>
        </section>
      </main>
    </>
  )
}
export default Home
