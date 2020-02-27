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
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <div className="ui container">
          <h3> Trending this week </h3>
          <Slider {...settings}>
            <div className="ui segment">
              <img src={f1} />
              <h3>50 % Off Sandwich</h3>
              <p>ice cream free</p>
            </div>
            <div className="ui segment">
              <img src={f2} />
              <h3>20% Off Chicken Crispy</h3>
              <p>with salted masala</p>
            </div>
            <div className="ui segment">
              <img src={f3} />
              <h3>10% Off Grill Sandwich</h3>
              <p>extra cheezes</p>
            </div>
            <div className="ui segment">
              <img src={f4} />
              <h3>20% Off chicken Lollypop</h3>
              <p>sezwan almargayy</p>
            </div>
            <div className="ui segment">
              <img src={f5} />
              <h3>60% Off Veg Burger</h3>
              <p>Chatni Fry</p>
            </div>
            <div className="ui segment">
              <img src={f6} />
              <h3>30% Off Tanduri Chicken</h3>
              <p>Leg Pieces</p>
            </div>
            <div className="ui segment">
              <img src={f7} />
              <h3>10% Off Bread Chicken</h3>
              <p>with malsai kofta</p>
            </div>
            <div className="ui segment">
              <img src={f8} />
              <h3>70% Off Masala Dhosa</h3>
              <p>with extra large size</p>
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}