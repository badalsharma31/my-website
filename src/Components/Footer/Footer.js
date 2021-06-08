import React from "react";
import image from "../../Images/badalImage.jpeg";
import "./Footer.css";
const Footer = () => {
  return (
    <>
    <div className="row p-4">
      <div className="col-4">
        <div className="d-flex justify-content-center">
          <img className="imgContainer"  src={image} alt="img"></img>
        </div>
      </div>
      <div className="col-4">
        <div style={{textAlign: "center"}}>
          
        </div>
      </div>
      <div className="col-4 d-flex align-items-center ">
        <a>
          <i class="fab fa-3x fa-facebook mr-5"></i>
        </a>
        <a>
          <i class="fab fa-3x fa-github mr-5"></i>
        </a>
        <a>
          <i class="fab fa-3x fa-medium"></i>
        </a>
        
      </div>
    </div>
    </>
  )
}

export default Footer;