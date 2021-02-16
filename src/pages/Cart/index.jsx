import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { plusCartItem, minusCartItem, removeCartItem } from "redux/action"
import { Button } from "components"
import { numberWithSpace } from "helpers"

import "./Cart.scss"

const CartItem = ({ _id, urlImg, name, totalPrice, totalCount, onMinus, onPlus, onRemove }) => {
  const handelMinusItem = () => {
    onMinus(_id)
  }
  const handelPlusItem = () => {
    onPlus(_id)
  }
  const handelRemoveItem = () => {
    onRemove(_id)
  }

  return (
    <div className="cart__item">
      <div className="cart__item-img">
        <img src={urlImg} alt="" />
      </div>
      <div className="cart__item-info">
        <h3>{name}</h3>
      </div>
      <div className="cart__item-count">
        <button onClick={handelMinusItem}>-</button>
        <span>{totalCount}</span>
        <button onClick={handelPlusItem}>+</button>
      </div>
      <div className="cart__item-price">{numberWithSpace(totalPrice)} ₽</div>
      <div className="cart__item-delete" onClick={handelRemoveItem}>
        <svg width="20" height="20" fill="none">
          <path
            d="M14.75 6h-9.5l.66 9.805c.061 1.013.598 1.695 1.489 1.695H12.6c.89 0 1.412-.682 1.49-1.695L14.75 6z"
            fill="#373536"
          ></path>
          <path
            d="M13.85 3.007H6.196C4.984 2.887 5.021 4.365 5 5h9.992c.024-.62.07-1.873-1.142-1.993z"
            fill="#373535"
          ></path>
        </svg>
      </div>
    </div>
  )
}

const Cart = () => {
  const { items, totalPrice } = useSelector(({ cart }) => cart)
  const addedItems = Object.keys(items).map((key) => {
    return items[key].items[0]
  })
  const dispatch = useDispatch()

  const onPlusItem = (id) => {
    dispatch(plusCartItem(id))
  }
  const onMinusItem = (id) => {
    dispatch(minusCartItem(id))
  }
  const onRemoveItem = (id) => {
    if (window.confirm("Вы действительно хотите удалить?")) {
      dispatch(removeCartItem(id))
    }
  }
  return (
    <div className="cart">
      <div className="cart__wrap">
        <div className="cart-title">Козина {totalPrice ? "" : "пустая"}</div>
        <div className="cart__items">
          {addedItems.length > 0 ? (
            addedItems.map((obj) => (
              <CartItem
                {...obj}
                key={obj._id}
                totalPrice={items[obj._id].totalPrice}
                totalCount={items[obj._id].items.length}
                onPlus={onPlusItem}
                onMinus={onMinusItem}
                onRemove={onRemoveItem}
              />
            ))
          ) : (
            <div className="cart__items-space">
              <img
                src="https://xl-static.rozetka.com.ua/assets/img/design/modal-cart-dummy.svg"
                alt=""
              />
            </div>
          )}
        </div>
        <div className="cart__footer">
          {totalPrice > 0 && (
            <div className="cart__footer-sum">Ваша сума: {numberWithSpace(totalPrice)} ₽</div>
          )}
          <div className="cart__footer-btn">
            <Link to="/" className="button">
              Вернутся на главную
            </Link>
            {totalPrice > 0 && <Button className="button">Оформить заказ</Button>}
          </div>
        </div>
      </div>
    </div>
  )
}
export default Cart
