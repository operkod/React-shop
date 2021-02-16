import React from "react"

import "./Navigation.scss"

const Nav = ({ onClick, active, navItems }) => {
  return (
    <nav className="nav">
      <ul>
        {navItems.map((el, index) => (
          <li key={`${el.type}_${index}`}>
            <a className={active === el.type ? "active" : ""} onClick={() => onClick(el)}>
              {el.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Nav
