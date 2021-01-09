import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import logo from "../assets/img/logo.svg"
import Button from "./Button"

const Header = ({ onChangeClick, activeNavBar, navItems }) => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)
  return (
    <div className="header">
      <div className="container">
        <nav className="header__nav">
          <div>
            <img src={logo} alt="" />
          </div>
          <ul>
            {navItems.map((el, index) => (
              <li key={`${el.type}_${index}`}>
                <a
                  className={activeNavBar === el.type ? "active" : ""}
                  onClick={() => onChangeClick(el)}
                >
                  {el.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <Link className="header__cart" to="/cart">
          <Button>
            {totalPrice === 0 ? "Корзина" : <span>{totalPrice} ₽</span>}
            <i></i>
            <span>{totalCount}</span>
          </Button>
        </Link>
      </div>
    </div>
  )
}
export default Header
