import React from "react"
import "./home.css"
import gold1 from "../../images/rawgem4.jpg"
import gold2 from "../../images/rawgold2.jpg"
import gem1 from "../../images/rawgem3.jpg"
import gem2 from "../../images/rawgem2.jpeg"
import { Link } from "react-router-dom"
import Typed from "typed.js";
import { useEffect, useRef } from "react";


function Home () {

    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["We are currrently hiring", "Click here to apply for our secretarial role"], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 50,
          backSpeed: 50,
          backDelay: 100
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);


    return(

        <div className="home">
        <div className="typed">
            <p><Link to="./apply" className="typed-text" ref={el}></Link></p>
            </div>
        <div className="first_section">
        <div className="images">
        <div className="images1">
        <img src={gold1} alt="raw gold image"/>
        <img src={gold2} alt="raw gold image"/>
        </div>
        <div className="images2">
        <img src={gem1} alt="raw gem image"/>
        <img src={gem2} alt="raw gem image"/>
        </div>
        </div>
       
        <div className="info-text">
        <h3 className="company">Company <span className="presentation">Presentation</span></h3>
  <p>Stewart.co is a raw Gold and Gemstone trading company. Founded in 2021,
    we work with miners in the extraction of raw gold and gemstones and look to transform them and trade them all around the world to jewelers and other industries in need of our service.</p>

    <p className="p2">Our Market includes all of USA and we are looking to expand into other countries in the nearest future.</p>
    <p className="p1">Because Of Focus, So Professional, To Better A Gemstone Consultant, JD Gemstone Expert Aims Is" Creating  Professional Gemstone Team, And Achieving Millions Of Merchants", Follow Concept Of Continuous Development And Double - Win Cooperation, We Will Keep On To Work Hard To Build A Better Gemstone One-Stop Service For All The Customers!</p>
</div> 
</div>




   <div id="aboutus">
               <h3 className="choose">Why Choose Us</h3>
    <ol>
     <li>Gemstone and Gold expert</li>
     <li>Professional Company</li>
     <li>Support small batch, large quantity and better price</li>
     <li>Update new products each week/many stock</li>
     <li>Shipment quickly</li>
     <li>Professional Team/Reasonable Price</li>
    </ol>
    <h3 id="pricing">Our Aim</h3>
<p className="aim">Create Value  For  Customers !  Follow  Concept Of Continuous Development And Double -Win Cooperation, We  Will  Keep  On To Work  Hard To Build A Better  Gemstone One-Stop Service For All The Customers!
</p>
<div className="button">
<Link to="./apply"><button>We are hiring!!</button></Link>
</div>
<p className="button-p">We are currently looking for a secretary position in our company. 
Click here to apply!!</p>
   </div>


</div>
    )
}

export default Home