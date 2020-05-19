import React, { useState } from "react"
import { PageProps } from "gatsby"
import { window } from 'browser-monads';
import MainNav from "../Main-nav/main-nav"

import "./header.scss"

import * as Logo from "../../images/logo.svg"

const Header = (props: PageProps) => {
  const [visible, isVisible] = useState(false)
  

  return (
    <header className="header">
      <div className="header__wrap">
        <div className="logo">
          <img className="logo__img" src={Logo} alt="logo" />
        </div>

        <div className="header__btn" onClick={() => isVisible(!visible)}>
          {(!visible && (
            <svg
              width="36"
              height="24"
              viewBox="0 0 36 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="36" height="3" rx="1.5" fill="#212353" />
              <rect y="10.5" width="36" height="3" rx="1.5" fill="#212353" />
              <rect y="21" width="36" height="3" rx="1.5" fill="#212353" />
            </svg>
          )) || (
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                y="25.6673"
                width="36"
                height="3"
                rx="1.5"
                transform="rotate(-45 0 25.6673)"
                fill="#212353"
              />
              <rect
                width="36"
                height="3"
                rx="1.5"
                transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 27.5771 25.6673)"
                fill="#212353"
              />
            </svg>
          )}
        </div>

        {visible && <MainNav />}
        {window.matchMedia("(min-width: 1920px)").matches && <MainNav />}
        
      </div>
    </header>
  )
}

export default Header
