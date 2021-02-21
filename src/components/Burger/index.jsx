import React from "react"
import classNames from "class-names"
import PropTypes from "prop-types"

import "./Burger.scss"

const Burger = ({ openMenu, onClick }) => {
  React.useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden"
    } else document.body.style.overflow = "auto"
  }, [openMenu])
  return (
    <div className={classNames("menu-btn", { open: openMenu })} onClick={onClick}>
      <div className="menu-btn__burger"></div>
    </div>
  )
}

export default Burger

Burger.propTypes = {
  openMenu: PropTypes.bool
}
