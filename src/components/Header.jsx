import React from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import classNames from "class-names"

import logo from "../assets/img/logo.svg"
import Button from "./Button"
import Nav from "./Navigation"
import Menu from "./Menu"

const Header = ({ activeNavBar, navItems, handelNav }) => {
  const { totalCount, totalPrice } = useSelector(({ cart }) => cart)
  const [openMenu, setOpenMenu] = React.useState(false)
  const onClickOpenMenu = () => {
    setOpenMenu(!openMenu)
  }
  const closeMenu = () => {
    setOpenMenu(() => false)
  }
  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "auto"
  }, [openMenu])

  return (
    <div className="header">
      <div className="container">
        <div className={classNames("menu-btn", { open: openMenu })} onClick={onClickOpenMenu}>
          <div className="menu-btn__burger"></div>
        </div>
        <div className="header__nav">
          <div>
            <img src={logo} alt="" />
          </div>
          <Nav active={activeNavBar} onClick={handelNav} navItems={navItems} />
        </div>
        <Link className="header__cart" to="/cart">
          <Button>
            {totalPrice === 0 ? "Корзина" : <span>{totalPrice} ₽</span>}
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
