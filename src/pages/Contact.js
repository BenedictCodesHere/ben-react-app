import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
<><div className="container">
    <div className="row">
        <div className="col-sm-8 col-md-8 col-lg-8"></div>
        <p className="text-center email my-5"><i class="bi bi-envelope-at"></i><br></br> codingwithbenedict99@gmail.com</p>
        <a className="btn" href="https://github.com/BenedictCodesHere/ben-react-app/blob/main/src/assets/CV/Benedict-McElroy-CV.pdf" target="_blank">CV</a>
        <Link className="btn" to="https://github.com/BenedictCodesHere/"><i class="bi bi-github"></i></Link>
        <Link className="btn" to="https://www.linkedin.com/in/benedict-mcelroy-005256230"><i class="bi bi-linkedin"></i></Link>
    </div>
  </div></>
    )

}

export default Contact;