import React from "react"
import { PageProps } from "gatsby"

import "./input.scss"

const Input = (props: PageProps) => {
  return (
    <>
      <label htmlFor="email" className="label-form">
        <input
          id="email"
          name="email"
          type="email"
          className="label-form__input"
          required
          placeholder="Enter your phone"
        />
      </label>
    </>
  )
}

export default Input
