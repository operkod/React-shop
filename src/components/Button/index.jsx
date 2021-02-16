import React from "react"
import classNames from "classnames"

import "./Button.scss"

const Button = ({ onClick, children, className }) => {
  return (
    <button onClick={onClick} className={classNames("button", className)}>
      {children}
    </button>
  )
}
export default Button
