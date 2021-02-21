import React from "react"
import classNames from "classnames"
import PropTypes from "prop-types"
import "./Button.scss"

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  )
}
export default Button

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
}
