import React, { Component } from "react";
import f1 from '../assets/f1.jpg';
import f2 from '../assets/f2.jpg';
import f3 from '../assets/f3.jpg';
import f4 from '../assets/f4.jpg';
import f5 from '../assets/f5.jpg';
import f6 from '../assets/f6.jpg';
import f7 from '../assets/f7.jpg';
import f8 from '../assets/f8.jpg';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Style.css";

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      initialSlide: 0,
      autoplaySpeed: 3000,
      cssEase: "linear",
    };
    return (
      <div>
        <div className="ui container">
          <h2> Trending this week </h2>
          <Slider {...settings}>
            <div>
              <img src={f1} className="searchimg1" />
            </div>
            <div>
              <img src={f2} className="searchimg1" />
            </div>
            <div>
              <img src={f3} className="searchimg1" />
            </div>
            <div>
              <img src={f4} className="searchimg1" />
            </div>
            <div>
              <img src={f5} className="searchimg1" />
            </div>
            <div>
              <img src={f6} className="searchimg1" />
            </div>
            <div>
              <img src={f7} className="searchimg1" />
            </div>
            <div>
              <img src={f8} className="searchimg1" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}