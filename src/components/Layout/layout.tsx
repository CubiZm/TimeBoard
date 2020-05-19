import React from "react"
import { PageProps } from "gatsby"

const Layout = (props: PageProps) => {
  return <div className="main-wrapper">{props.children}</div>
}

export default Layout
