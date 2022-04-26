import "../App.css";
import React from "react";


function Custom() {
  return (
    <div className="App">
        <div className="bg">
   
        <h1 className="text-center">Order a custom beat</h1>

<div className="pricing-box-container">
	<div className="pricing-box text-center">
		<h5>Basic</h5>
		<p className="price"><sup>$</sup>9.90<sub>/beat</sub></p>
		<ul className="features-list">
			<li><strong className="strong">Receive</strong> tagged MP3 file</li>
			<li><strong className="strong">Use for</strong> non-profit only</li>
			<li><strong className="strong">Credit</strong> 'STEXBEATS' required</li>
			<li><strong className="strong">5,000</strong> Messages</li>
		</ul>
		<button className="btn-primary">Add to cart</button>
	</div>

	<div className="pricing-box pricing-box-bg-image text-center">
		<h5 className="shadow">Premium</h5>
		<p className="price shadow" id="pricefontwhite"><sup>$</sup>14.90<sub>/beat</sub></p>
		<ul className="features-list">
			<li className="shadow"> <strong className="strong" >2</strong> Instrument</li>
			<li className="shadow"><strong className="strong ">20</strong> Team Members</li>
			<li className="shadow"><strong className="strong ">100</strong> Personal Projects</li>
			<li className="shadow"><strong className="strong ">15,000</strong> Messages</li>
		</ul>
		<button className="btn-primary">Add to cart</button>
	</div>

	<div className="pricing-box text-center">
		<h5>Platinum</h5>
		<p className="price"><sup>$</sup>19.90<sub>/beat</sub></p>
		<ul className="features-list">
			<li><strong className="strong">5-or more</strong> Instrument</li>
			<li><strong className="strong">50</strong> Team Members</li>
			<li><strong className="strong">500</strong> Personal Projects</li>
			<li><strong className="strong">50,000</strong> Messages</li>
		</ul>
		<button className="btn-primary">Add to cart</button>
	</div>
</div>

<footer>
	<p>
		Created by <i className="fa fa-heart"></i>  
		<a target="_blank" href="https://www.instagram.com/sss_stex/">STEXBEATS </a>,2022
	</p>
</footer>



      </div>
    </div>
  );
}

export default Custom;
