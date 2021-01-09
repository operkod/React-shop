import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { addProductToCart, setNavBar, setSortBy } from "../../redux/action"
import { Header, LoaderProduct, Product, SortBy } from "../../components"

const Home = ({ items, navBar, sortBy, isLoaded, navItem, sortItems }) => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)

  const dispatch = useDispatch()
  const productTitle = navItem.find((obj) => obj.type === navBar).name
  const onChangeNav = (el) => {
    dispatch(setNavBar(el.type))
  }

  const handleAddProductToCart = (obj) => {
    dispatch(addProductToCart(obj))
  }

  const setChangeSortBy = React.useCallback((el) => {
    dispatch(setSortBy(el))
  }, [])
  
  return (
    <>
      <Header
        totalCount={totalCount}
        totalPrice={totalPrice}
        activeNavBar={navBar}
        onChangeClick={onChangeNav}
        navItem={navItem}
      />
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
