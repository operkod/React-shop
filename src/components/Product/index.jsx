import React from "react"
import { Button } from ".."

import "./Product.scss"
const Product = ({ onClickAddProductCart, _id, name, text, urlImg, price, count }) => {
  const onAddProduct = () => {
    const obj = {
      _id,
      urlImg,
      name,
      price
    }
    onClickAddProductCart(obj)
  }

  return (
    <article className="product">
      <main className="product-header">
        <img className="product-header__img" src={urlImg} alt={name} />
        <h2 className="product-header__title">{name}</h2>
        <p className="product-header__text">{text}</p>
      </main>
      <footer className="product-footer">
        <span className="product-footer__price">{price} ₽</span>
        <Button onClick={onAddProduct} className="button--shadow">
          Выбррать <span>{count}</span>
        </Button>
      </footer>
    </article>
  )
}
export default Product
