import "./footer.css"
import Linkedin from "../../images/linkedin.png";
import Instagram from  "../../images/instagram.png";
import Whatsapp from "../../images/whatsapp.png";
import Twitter from "../../images/twitterLogo.png";

function Footer(){
    return(
        <>
        <footer>
        <div>
       <img   className="shopetimage" src="" alt="stewartLogo"/>
         <br/>
         <span className="head">Follow Us On</span><br/>
        <div className="icons"> 
       <a href=""><img src={Linkedin} alt="Linkedin Icon"/></a><br/>

       </div>
       </div>

       <div>

       <ul className="footerLI">
        <a href="#aboutus"><li>About Us</li></a>
        <a href="services"><li>Services</li></a>
       </ul>
       </div>

       <div>
       
        <ul>
         <span className="head">Reach us At</span><br/>
            <a href="mailto:stewartmildred138@gmail.com">stewartmildred138@gmail.com</a>
            <br/>
            <a href="tel:"></a>
        </ul>
       </div>


       
       </footer>
      <div className="LastSection">
        <p>© stewart 2022. All Rights Reserved
</p>
       <p>Terms and Conditions / Privacy Policy</p>
       </div>

        </>
    )
}

export default Footer