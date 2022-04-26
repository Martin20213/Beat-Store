import "../App.css";
import "../Home.css"
import React from "react";
import { Link } from "react-router-dom";


function Home() {
 
 
  return (
    <div className="App">

 

  
    <p id='head1' className='header'>STEXBEATS</p>
    <p id='head2' className='header'>Beat Store</p>
    <p id='head3' className='header'>Best beats for your vocals to sit on</p>
    <p id='head4' className='header'>Welcome to the store</p>
    
    <Link to ="/home"><button className="homebutton">Continue</button></Link>
     
      <div className='light x1'></div>
      <div className='light x2'></div>
      <div className='light x3'></div>
      <div className='light x4'></div>
      <div className='light x5'></div>
      <div className='light x6'></div>
      <div className='light x7'></div>
      <div className='light x8'></div>
      <div className='light x9'></div>





      </div>

  );
} 


export default Home;
