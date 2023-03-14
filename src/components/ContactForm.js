import React from "react";
import "./ContactForm.css";

function ContactForm(){
    return(<div className="container">
        <form className="contact-form mt-5">
  <div className="form-group row">
    <label for="inputEmail3" className="col-sm-12 col-form-label text-center visuallyhidden">Email</label>
    <div className="col-sm-12">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
    </div>
  </div>
  <div className="form-group row">
    <label for="inputName3" className="col-sm-12 text-center col-form-label">Name</label>
    <div className="col-sm-12">
      <input type="name" className="form-control" id="inputName3" placeholder="Name" />
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-12 text-center pt-0 fw-bold">Who are you</legend>
      <div className="col-sm-2"></div>
      <div className="col-sm-12">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" />
          <label className="form-check-label" for="gridRadios1">
            Employer
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2" />
          <label className="form-check-label" for="gridRadios2">
            Developer
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
          <label className="form-check-label" for="gridRadios3">
            Neither
          </label>
        </div>
      </div>
    </div>
  </fieldset>
  
  <div className="form-group row">
    <div className="col-sm-2"></div>
    <div className="col-sm-6">
      <button type="submit" className="btn btn-contact">Submit</button>
    </div>
  </div>
</form>
    </div>)
};

export default ContactForm;