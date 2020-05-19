import React, { useState } from "react"
import Button from "../Button/button"

import "./main-nav.scss"
import { Link } from "@reach/router"

const MainNav = () => {
  const [visible, isVisible] = useState(false)
  const [media] = useState(1920)

  return (
    <nav className="main-nav">
      <ul className="main-nav__list">
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            About
          </Link>
        </li>
        <li className="main-nav__item main-nav__item--arrow">
          <Link
            className="main-nav__link"
            to=""
            onClick={() => isVisible(!visible)}
          >
            Help
          </Link>
          {visible && (
            <div className="main-nav__added-wrap">
              <ul className="main-nav__add-nav">
                <li className="main-nav__added-item">
                  <Link className="main-nav__link main-nav__link--add" to="">
                    User Guide
                  </Link>
                </li>
                <li className="main-nav__added-item">
                  <Link className="main-nav__link main-nav__link--add" to="">
                    Contact Support
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </li>
        <li className="main-nav__item">
          <Link className="main-nav__link" to="">
            Features
          </Link>
        </li>
      </ul>

      <div className="main-nav__btn-wrap">
        <Button mod="violet">Sign Up</Button>
      </div>
    </nav>
  )
}

export default MainNav
