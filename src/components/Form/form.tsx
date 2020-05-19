import React from "react"
import { PageProps } from "gatsby"
import Input from "./Input/input"
import Button from "../Button/button"

import "./form.scss"

const Form = (props: PageProps) => {
  return (
    <form className="form">
      <fieldset className="form__fieldset">
        <Input />
      </fieldset>

      <div className="form__btn-wrap">
        <Button mod="yellow">Sign Up Now</Button>
      </div>
    </form>
  )
}

export default Form
