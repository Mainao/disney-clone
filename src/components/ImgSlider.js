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
			<div>
				<img src={badging} alt="" className="rounded-md" loading="lazy" />
			</div>
			<div>
				<img src={scaleone} alt="" className="rounded-md" loading="lazy" />
			</div>
			<div>
				<img src={badgingone} alt="" className="rounded-md" loading="lazy" />
			</div>
			<div>
				<img src={scaletwo} alt="" className="rounded-md" loading="lazy" />
			</div>
		</Slider>
	)
}

export default ImgSlider;