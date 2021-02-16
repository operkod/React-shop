import React from "react"
import classNames from "class-names"
import { Nav } from ".."

import "./Menu.scss"

const Menu = ({ handelNav, navItems, activeNavBar, openMenu, closeMenu }) => {
  return (
    <div className={classNames("menu", { active: openMenu })} onClick={closeMenu}>
      <Nav onClick={handelNav} navItems={navItems} active={activeNavBar} />
    </div>
  )
}
export default Menu
