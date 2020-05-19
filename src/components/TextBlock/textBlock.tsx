import React from "react"
import { PageProps } from "gatsby"
// import Layout from "../Layout/layout"

import "./text-block.scss"

const TextBlock = (props: PageProps) => (
  <div className="text-block">
    <h1 className="text-block__title">Features</h1>
    <p className="text-block__text">
      Some of the features and advantages that we provide for those of you who
      store data in this Data Warehouse.
    </p>
  </div>
)

export default TextBlock
