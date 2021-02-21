import React from "react"
import PropTypes from "prop-types"
import classNames from "class-names"
import { Nav } from ".."

import "./Menu.scss"

const Menu = ({ handleNav, navItems, activeNavBar, openMenu, closeMenu }) => {
  return (
    <div className={classNames("menu", { active: openMenu })} onClick={closeMenu}>
      <Nav onClick={handleNav} navItems={navItems} active={activeNavBar} />
    </div>
  )
}
export default Menu

Menu.propTypes = {
  openMenu: PropTypes.bool
}
