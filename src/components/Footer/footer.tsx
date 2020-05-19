import React from "react"
import { PageProps, Link } from "gatsby"

import "./footer.scss"

import * as footerLogo from "../../images/logo-white.svg"
import Form from "../Form/form"

const Footer = (props: PageProps) => {
  return (
    <footer className="footer">
      <div className="footer__wrap">
        <div className="logo logo--footer">
          <img src={footerLogo} alt="Logo" />
        </div>

        <ul className="footer__menu">
          <li className="footer__item">
            <Link to="#" className="footer__link">
              About
            </Link>
          </li>
          <li className="footer__item">
            <Link to="#" className="footer__link">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>

      <Form />
    </footer>
  )
}

export default Footer
