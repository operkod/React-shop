import React from "react"
import Button from "./Button"

const Product = ({ onClickAddProductCar, _id, name, text, urlImg, price }) => {
  const onAddProduct = () => {
    const obj = {
      _id,
      urlImg,
      name,
      price
    }
    onClickAddProductCar(obj)
  }

  return (
    <article>
      <main>
        <img src={urlImg} alt="" />
        <h2>{name}</h2>
        <p>{text}</p>
      </main>
      <footer>
        <span>{price} ₽</span>
        <Button onClick={onAddProduct} className="button--shadow">
          Выбррать
        </Button>
      </footer>
    </article>
  )
}
export default Product
