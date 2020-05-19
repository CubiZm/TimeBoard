import React from "react"

import { Helmet } from "react-helmet"
import Layout from "../components/Layout/layout"
import SEO from "../components/General/seo"
import Header from "../components/Header/header"
import TextBlock from "../components/TextBlock/textBlock"
import SliderBlock from "../components/Slider/slider"
import Footer from "../components/Footer/footer"

import "../components/General/normalize.css"
import "../components/General/main.scss"

const IndexPage = () => (
  <>
    <Helmet name="viewport" content="width=device-width, initial-scale=1.0" />
    <Header />

    <Layout>
      <SEO
        title="Features | Actitime"
        key="features"
        description="Features by Actitime"
      />

      <TextBlock />

      <SliderBlock />

      <Footer />
    </Layout>
  </>
)

export default IndexPage
