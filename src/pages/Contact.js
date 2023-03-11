import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
<><div className="container">
    <div className="row">
        <p>Email address: codingwithbenedict99@gmail.com</p>
        <Link to="">CV</Link>
        <Link to="https://github.com/BenedictCodesHere/">Github</Link>
        <Link to="https://www.linkedin.com/in/benedict-mcelroy-005256230">LinkedIn</Link>
    </div>
  </div></>
    )

}

export default Contact;