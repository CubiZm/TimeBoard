import React from "react"
import { PageProps, Link } from "gatsby"
import Slider from "react-slick"

import "./slider.scss"

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  className: "slider__slides",
  dotsClass: "slider__dots",
  arrows: false,
  // centerMode: true
  responsive: [
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1920,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
  ],
}

const SliderBlock = (props: PageProps) => {
  return (
    <div className="slider">
      <Slider {...settings} className="slider__slick-slider">
        <div className="slider__item">
          <h2 className="slider__title">First Feature</h2>
          <p className="slider__text">
            Little Red Cap opened her eyes and when she saw the sunbeams dancing
            to and fro through the trees and how the ground was covered with
            beautiful flowers.
          </p>
          <Link className="slider__link" to="">
            Learn more
          </Link>
        </div>

        <div className="slider__item">
          <h2 className="slider__title">Second Feature</h2>
          <p className="slider__text">
            Little Red Cap opened her eyes and when she saw the sunbeams dancing
            to and fro through the trees and how the ground was covered with
            beautiful flowers.
          </p>
          <Link className="slider__link" to="">
            Learn more
          </Link>
        </div>

        <div className="slider__item">
          <h2 className="slider__title">Third Feature</h2>
          <p className="slider__text">
            Little Red Cap opened her eyes and when she saw the sunbeams dancing
            to and fro through the trees and how the ground was covered with
            beautiful flowers.
          </p>
          <Link className="slider__link" to="">
            Learn more
          </Link>
        </div>

        <div className="slider__item">
          <div className="slider__ribbon">New</div>
          <h2 className="slider__title">Fourth Feature</h2>
          <p className="slider__text">
            Little Red Cap opened her eyes and when she saw the sunbeams dancing
            to and fro through the trees and how the ground was covered with
            beautiful flowers.
          </p>
          <Link className="slider__link" to="">
            Learn more
          </Link>
        </div>
      </Slider>
    </div>
  )
}

export default SliderBlock
