import React from "react"
import { PageProps } from "gatsby"

import "./button.scss"

interface ButtonProps {
  mod: string
  children: string
}

const Button = (props: ButtonProps) => {
  return (
    <button className={`button button--${props.mod}`} type="submit">
      {props.children}
    </button>
  )
}

export default Button
