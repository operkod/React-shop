import React from "react"
import PropTypes from "prop-types"

import "./Navigation.scss"

const Nav = ({ onClick, active, navItems }) => {
  return (
    <nav className="nav">
      <ul>
        {navItems.map((el, index) => (
          <li key={`${el.type}_${index}`}>
            <a className={active === el.type ? "active" : ""} onClick={onClick.bind(null, el)}>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav

Nav.propTypes = {
  active: PropTypes.string,
  navItems: PropTypes.array
}
