import React from 'react';
import Slider from "react-slick";
import badging from '../assets/badging.jpeg';
import scaleone from '../assets/scaleone.jpeg';
import badgingone from '../assets/badgingone.jpeg';
import scaletwo from '../assets/scaletwo.jpeg';

const ImgSlider = () => {
	let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
		autoplay: true,
		adaptiveHeight: true,
		arrows: false
  };
	return (
		<Slider {...settings}>
			<div className="px-2">
				<img src={badging} alt=""/>
			</div>
			<div className="px-2">
				<img src={scaleone} alt=""/>
			</div>
			<div className="px-2">
				<img src={badgingone} alt=""/>
			</div>
			<div className="px-2">
				<img src={scaletwo} alt=""/>
			</div>
		</Slider>
	)
}

export default ImgSlider;