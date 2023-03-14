import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
<><div className="container">
    <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8"></div>
        <p className="text-center my-5">Email:<br></br> codingwithbenedict99@gmail.com</p>
        <a className="btn btn-info" href="https://github.com/BenedictCodesHere/ben-react-app/blob/main/src/assets/CV/Benedict-McElroy-CV.pdf" target="_blank">CV</a>
        <Link className="btn btn-warning" to="https://github.com/BenedictCodesHere/">Github</Link>
        <Link className="btn btn-info" to="https://www.linkedin.com/in/benedict-mcelroy-005256230">LinkedIn</Link>
    </div>
  </div></>
    )

}

export default Contact;