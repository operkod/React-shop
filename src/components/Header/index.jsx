import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { numberWithSpace } from "helpers"
import logo from "assets/img/logo.svg"
import { Button, Nav, Menu, Burger } from ".."

import "./Header.scss"

const Header = ({ activeNavBar, navItems, handelNav }) => {
  const [openMenu, setOpenMenu] = React.useState(false)
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)

  const onClickOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  const closeMenu = () => {
    setOpenMenu(false)
  }

  return (
    <div className="header">
      <div className="container">
        <Burger onClick={onClickOpenMenu} openMenu={openMenu} />
        <div className="header__nav">
          <div>
            <img src={logo} alt="Pizza" />
          </div>
          <Nav active={activeNavBar} onClick={handelNav} navItems={navItems} />
        </div>
        <Link className="header__cart" to="/cart">
          <Button>
            {totalPrice === 0 ? "Корзина" : <span>{numberWithSpace(totalPrice)} ₽</span>}
            <i></i>
            <span>{totalCount}</span>
          </Button>
        </Link>
      </div>
      <Menu
        closeMenu={closeMenu}
        activeNavBar={activeNavBar}
        openMenu={openMenu}
        handelNav={handelNav}
        navItems={navItems}
      ></Menu>
    </div>
  )
}
export default Header
