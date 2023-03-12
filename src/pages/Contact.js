import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
<><div className="container">
    <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8"></div>
        <p className="text-center my-5">Email:<br></br> codingwithbenedict99@gmail.com</p>
        <Link className="btn btn-info" to="">CV</Link>
        <Link className="btn btn-warning" to="https://github.com/BenedictCodesHere/">Github</Link>
        <Link className="btn btn-info" to="https://www.linkedin.com/in/benedict-mcelroy-005256230">LinkedIn</Link>
    </div>
  </div></>
    )

}

export default Contact;