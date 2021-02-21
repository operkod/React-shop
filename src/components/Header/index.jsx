import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { numberWithSpace } from "helpers"
import logo from "assets/img/logo.svg"
import { Button, Nav, Menu, Burger } from ".."

import "./Header.scss"

const Header = ({ activeNavBar, navItems, handleNav }) => {
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
          <Nav active={activeNavBar} onClick={handleNav} navItems={navItems} />
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
        handleNav={handleNav}
        navItems={navItems}
      ></Menu>
    </div>
  )
}
export default Header

Header.propTypes = {
  activeNavBar: PropTypes.string,
  navItems: PropTypes.array,
  handelNav: PropTypes.func,
  totalCount: PropTypes.number,
  totalPrice: PropTypes.number
}
